use anyhow::{Context, Result};
use async_trait::async_trait;

use super::{Handler, Request, Response};
use crate::region;

use tracing::info; // to print messages

use dtinterface::interface_client::InterfaceClient as DtInterfaceClient;
use dtinterface::{ChannelWindowRequest, PlatformRequest};

use spinterface::interface_client::InterfaceClient as SpInterfaceClient;
use spinterface::{Void,FreqChange};

pub mod spinterface {
        tonic::include_proto!("sampleproxy.rpc");
    } 
    
pub mod dtinterface {
    tonic::include_proto!("demodtelemetry.rpc");    
} 


pub struct Algorithm {}

impl Algorithm {
    pub fn new() -> Self {
        Algorithm {}
    }

    fn get_ideal_tx_power_index_and_dr(
        nb_step: isize,
        tx_power_index: u8,
        dr: u8,
        max_tx_power_index: u8,
        max_dr: u8,
    ) -> (u8, u8) {
        if nb_step == 0 {
            return (tx_power_index, dr);
        }

        let mut nb_step = nb_step;
        let mut dr = dr;
        let mut tx_power_index = tx_power_index;

        if nb_step > 0 {
            if tx_power_index < max_tx_power_index {
                // Decrease the tx-power.
                // (note that an increase in index decreases the tx-power)
                tx_power_index += 1;
            } else if dr < max_dr {
                // Increase the DR.
                dr += 1;
            }
            nb_step -= 1;
        } else {
            // Increase the tx-power.
            // (note that a decrease in index increases the tx-power)
            // Subtract only if > 0
            tx_power_index = tx_power_index.saturating_sub(1);
            nb_step += 1;
        }

        Self::get_ideal_tx_power_index_and_dr(
            nb_step,
            tx_power_index,
            dr,
            max_tx_power_index,
            max_dr,
        )
    }

    fn required_history_count(&self) -> usize {
        20
    }

    // Returns the history count with equal TxPowerIndex.
    fn get_history_count(&self, req: &Request) -> usize {
        req.uplink_history
            .iter()
            .filter(|x| x.tx_power_index == req.tx_power_index as u32)
            .count()
    }

    fn get_max_snr(&self, req: &Request) -> f32 {
        let mut max_snr: f32 = -999.0;

        for uh in &req.uplink_history {
            if uh.max_snr > max_snr {
                max_snr = uh.max_snr;
            }
        }

        max_snr
    }

    fn get_nb_trans(&self, current_nb_trans: u8, pkt_loss_rate: f32) -> u8 {
        let pkt_loss_table: [[u8; 3]; 4] = [[1, 1, 2], [1, 2, 3], [2, 3, 3], [3, 3, 3]];

        let mut current_nb_trans = current_nb_trans;
        if current_nb_trans < 1 {
            current_nb_trans = 1;
        }

        if current_nb_trans > 3 {
            current_nb_trans = 3;
        }

        let nb_trans_index = current_nb_trans as usize - 1;
        if pkt_loss_rate < 5.0 {
            return pkt_loss_table[0][nb_trans_index];
        } else if pkt_loss_rate < 10.0 {
            return pkt_loss_table[1][nb_trans_index];
        } else if pkt_loss_rate < 30.0 {
            return pkt_loss_table[2][nb_trans_index];
        }

        pkt_loss_table[3][nb_trans_index]
    }

    fn get_packet_loss_percentage(&self, req: &Request) -> f32 {
        if req.uplink_history.len() < self.required_history_count() {
            return 0.0;
        }

        let mut lost_packets: u32 = 0;
        let mut previous_f_cnt: u32 = 0;

        for (i, h) in req.uplink_history.iter().enumerate() {
            if i == 0 {
                previous_f_cnt = h.f_cnt;
                continue;
            }

            lost_packets += h.f_cnt - previous_f_cnt - 1; // there is always an expected difference of 1
            previous_f_cnt = h.f_cnt;
        }

        (lost_packets as f32) / (req.uplink_history.len() as f32) * 100.0
    }
}

#[async_trait]
impl Handler for Algorithm {
    fn get_name(&self) -> String {
        "Iura-L ADR algorithm (iura-xss only)".to_string()
    }

    fn get_id(&self) -> String {
        "iuraL".to_string()
    }


    async fn handle(&self, req: &Request) -> Result<Response> {
        let mut resp = Response {
            dr: req.dr,
            tx_power_index: req.tx_power_index,
            nb_trans: req.nb_trans,
            ch_mask: req.ch_mask,
        };

        // If ADR is disabled, return with current values.
        if !req.adr {
            info!("ADR is disabled");
            return Ok(resp);
        } else {
            info!("ADR is enabled");
        }
////////////////

        let mut dtclient = DtInterfaceClient::connect("http://192.168.16.50:53226").await?;
        
        let conf_request = tonic::Request::new(PlatformRequest { });
        let conf_response = dtclient.conf(conf_request).await?;
        println!("RESPONSE={:?}", conf_response.into_inner() ); 


        let mut spclient = SpInterfaceClient::connect("http://192.168.16.50:58400").await?;
        let host_request = tonic::Request::new(Void { });
        let host_response = spclient.version(host_request).await?;
        println!("RESPONSE={:?}", host_response.into_inner() );
      
 
///////////////////////

        // The max DR might be configured to a non LoRa (125kHz) data-rate.
        // As this algorithm works on LoRa (125kHz) data-rates only, we need to
        // find the max LoRa (125 kHz) data-rate.
        let region_conf =
            region::get(&req.region_config_id).context("Get region config for region")?;
        let mut max_dr = req.max_dr;
        let max_lora_dr = region_conf
            .get_enabled_uplink_data_rates()
            .into_iter()
            .filter(|dr| {
                let dr = region_conf.get_data_rate(*dr).unwrap();
                if let lrwn::region::DataRateModulation::Lora(l) = dr {
                    l.bandwidth == 125000
                } else {
                    false
                }
            })
            .max()
            .unwrap_or(0);

        // Reduce to max LoRa DR.
        if max_dr > max_lora_dr {
            max_dr = max_lora_dr;
        }

        // Lower the DR only if it exceeds the max. allowed DR.
        if req.dr > max_dr {
            resp.dr = max_dr;
        }

        info!(CurrentDr = req.dr , "Current Dr is");
        info!(CurrentTxPwrIndex = req.tx_power_index , "Current TxPwrIndex is");
        let mut req_dr = req.dr;
        let mut req_tx_power_index = req.tx_power_index;

        // compute actual required_snr_for_dr (temporary patch, computation to be fixed later )
        let mut required_snr_for_dr = req.required_snr_for_dr;
        let mut spreading_factor = 0;
        if req_dr == 0 {        //SF=64
            required_snr_for_dr = -18.0;
            spreading_factor = 64;
        } else if req_dr == 1 { //SF=128
            required_snr_for_dr = -21.0;
            spreading_factor = 128;
        } else if req_dr == 2 { //SF=256
            required_snr_for_dr = -24.0;
            spreading_factor = 256;
        } else if req_dr == 3 { //SF=64
            required_snr_for_dr = -18.0;
            spreading_factor = 64;
        } else if req_dr == 4 { //SF=128
            required_snr_for_dr = -21.0;
            spreading_factor = 128;
        } else if req_dr == 5 { //SF=256
            required_snr_for_dr = -24.0;
            spreading_factor = 256;
        }

        // Set the new nb_trans;
        resp.nb_trans = self.get_nb_trans(req.nb_trans, self.get_packet_loss_percentage(req));

        // Calculate the number of steps.
        let snr_max = self.get_max_snr(req);
        let snr_margin = snr_max - required_snr_for_dr - req.installation_margin;
       // let n_step = (snr_margin / 4.0) as isize;
        let tx_power_step = (snr_margin / 4.0) as isize;

        info!(SNRMax = snr_max, "SNRMax is");
        info!(MaxTxPowerIndex = req.max_tx_power_index, "MaxTxPowerIndex is");
        info!(MaxDr = req.max_dr, "MaxDr is");
        info!(RequiredSNRforDr = required_snr_for_dr, "required_snr_for_dr is");
        info!(InstallationMargin = req.installation_margin, "installation_margin is");
        info!(SNRMargin = snr_margin, "SNRMargin is");
        info!(TxPowerStep = tx_power_step, "TxPowerStepSize is");
        info!(CurrentDr = req_dr , "Current Dr is");
        info!(CurrentTxPwrIndex = req_tx_power_index , "Current TxPwrIndex is");
        println!("Current Ch Mask={:?}", req.ch_mask);

        
        // Initialize desired values to initial ones
        let  mut desired_tx_power_index = req_tx_power_index;
        let  mut desired_dr = req_dr;

        let  max_tx_power_index = 14;

        let ch_mask_indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let ch_freqs = [1101000000.0,1101500000.0,1102000000.0];
        let kl_buclnb_offset = -50000000.0;     // K-band

        // initialize SampleProxy RX Frequency 
        let mut sp_rxfreq=1000000000.0;

        let stt_max = 10.0 ;
        let stt_thres_medium = 0.2 * stt_max;
        let stt_thres_high = 0.8 * stt_max;

        // Update datarate and tx power
        // In case of negative steps the ADR algorithm will increase the TxPower if possible
        if tx_power_step <= 0 && spreading_factor < 256 { // increase margin by adopting more robust Dr
            desired_dr = req_dr+1;
        } else if tx_power_step < 0 && spreading_factor == 256 {  // increase power decreasing tx_power_index
            desired_tx_power_index = desired_tx_power_index.saturating_sub(1);
        } else if tx_power_step > 0 {  // increase power decreasing tx_power_index
            desired_tx_power_index = (desired_tx_power_index + tx_power_step as u8) as u8;
        } 

        if desired_tx_power_index > max_tx_power_index {
            desired_tx_power_index = max_tx_power_index; 
        }
        resp.dr = desired_dr;
        resp.tx_power_index = desired_tx_power_index;

        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        //    Evaluate traffic and Update Channel Mask
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        
        for ch_idx in ch_mask_indexes {
            // Initialize to false
            resp.ch_mask[(ch_idx % 16) as usize] = false;
            println!("Initing Resp Ch Mask idx {:?} to false", ch_idx);
            println!("Current Resp Ch Mask={:?}", resp.ch_mask);
    
        }

        println!("Enabling ch idx 0");
        resp.ch_mask[(0 % 16) as usize] = true;

        println!("Resp Ch Mask={:?}", resp.ch_mask);

        info!(NewDr = resp.dr , "New Dr is");
        info!(NewTxPwrIndex = resp.tx_power_index , "New TxPwrIndex is");

        Ok(resp)
    }
}
