use std::sync::Mutex;
use tonic::{transport::Server, Request, Response, Status};
use interface::interface_server::{InterfaceServer, Interface};
use interface::{ChannelWindowRequest, KpiResponse, PlatformRequest, Conf, SystemInfo, KpIs};

pub mod interface {
    tonic::include_proto!("demodtelemetry.rpc");
}

#[derive(Debug, Default)]
pub struct InterfaceService {
    kpis: Mutex<Vec<KpIs>>,
}

#[tonic::async_trait]
impl Interface for InterfaceService {
    async fn conf(&self, request: Request<PlatformRequest>) -> Result<Response<Conf>, Status> {
        println!("Got a request: {:?}", request);
           
           
        // Create some dummy values for the KPIs
       // let packet_counters = 100;
        //let packet_rate_stats = 0.5;
        
        // Create the response message
        let version = "0.0.1".to_string();
        let refresh_time = 1000;
//        let windows_duration_settings: Vec<T> = Vec::new();
//        self.wdss.lock().unwrap().push(windows_duration_settings.clone());
        let power_spread_quantile_low = 1;
        let power_spread_quantile_high = 99;
        
        let mut message = Conf {
            version: version,
            refresh_time_ms: refresh_time,
            windows_duration_settings: Vec::new(),
            power_spread_quantile_low: power_spread_quantile_low,
            power_spread_quantile_high: power_spread_quantile_high,
        };
        
        message.windows_duration_settings.push(1000);
        message.windows_duration_settings.push(5000);
        
        // Return the response
        Ok(Response::new(message))
        }

    async fn system_info(&self, request: Request<PlatformRequest>) -> Result<Response<SystemInfo>, Status> {
        println!("Got a request: {:?}", request);
               
        // Create the response message
        let myhostname = "iura-fe3".to_string();
        //  let windows_duration = 5000;
        let message = SystemInfo {
            hostname: myhostname,
//             windows_duration_settings: windows_duration,
        //kpis: Some(KPIs {
        //packet_counters: packet_counters,
        //packet_rate_stats: packet_rate_stats,
        //}),
        };
            
        // Return the response
        Ok(Response::new(message))
        }

async fn channel_kpis_per_window(
&self,
request: Request<ChannelWindowRequest>,
) -> Result<Response<KpiResponse>, Status> {
println!("Got a request: {:?}", request);

// Get the request parameters
let window_duration = request.get_ref().window_duration;
let channel_id = request.get_ref().channel_id;

// Create some dummy values for the KPIs
let packet_counters = 100;
let packet_rate_stats = 0.5;
let stt_stats  = 88.9;
let packet_rate_peak_to_average_ratio = 2.23;
let avg_esovern0_stats = 5.5;
let signal_power_stats = -10.1;
let signal_power_spread_stats         = 9.3;
let ber_stats = 0.02;
let freq_drift_stats = 101.1;     

// Create the response message

let kpis_item = KpIs {
    channel_id: channel_id,
    window_duration: window_duration,
    packet_counters: packet_counters,
    packet_rate_stats: packet_rate_stats,
    stt_stats: stt_stats,
    packet_rate_peak_to_average_ratio: packet_rate_peak_to_average_ratio,
    avg_esovern0_stats: avg_esovern0_stats,
    signal_power_stats: signal_power_stats,
    signal_power_spread_stats:  signal_power_spread_stats,
    ber_stats: ber_stats,
    freq_drift_stats: freq_drift_stats,
};

self.kpis.lock().unwrap().push(kpis_item.clone());


let reply = KpiResponse {
    kpis: self.kpis.lock().unwrap().to_vec()
//    kpis: Some(kpis_item),
//kpis:  { Some {
//kpis: Some(KPIs {
};

// Return the response
Ok(Response::new(reply))
}
}
        

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50051".parse().unwrap();
    let interface_service = InterfaceService::default();

    Server::builder()
        .add_service(InterfaceServer::new(interface_service))
        .serve(addr)
        .await?;

    Ok(())
}