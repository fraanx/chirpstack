use interface::interface_client::InterfaceClient;
use interface::{ChannelWindowRequest, PlatformRequest};

pub mod interface {
    tonic::include_proto!("demodtelemetry.rpc");
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // let mut client = InterfaceClient::connect("http://0.0.0.0:50051").await?;
    let mut client = InterfaceClient::connect("http://192.168.104.25:53226").await?;

    let host_request = tonic::Request::new(PlatformRequest { });
    let host_response = client.system_info(host_request).await?;
    println!("RESPONSE={:?}", host_response.into_inner() );

    let conf_request = tonic::Request::new(PlatformRequest { });
    let conf_response = client.conf(conf_request).await?;
    println!("RESPONSE={:?}", conf_response.into_inner() );

    // Create a request message
    let kpis_request = tonic::Request::new(ChannelWindowRequest {
    window_duration: 5000,
    channel_id: 11,
    });
    
    // Send the request and get the response
    let kpis_response = client.channel_kpis_per_window(kpis_request).await?;
    
    // Print the response
    println!("RESPONSE={:?}", kpis_response.into_inner());

///////////



    // Handle errors or print the response
    //match response {
    //Ok(response) => println!("RESPONSE={:?}", response),
    //Err(error) => println!("ERROR={:?}", error),
    
    Ok(())
}