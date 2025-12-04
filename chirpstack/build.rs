fn main() -> Result<(), Box<dyn std::error::Error>> {
  tonic_build::configure()
     .compile(&["proto/demodtelemetry.proto","proto/sampleproxy.proto"], &["proto"])
     .unwrap();
  Ok(())
  
  // tower_grpc_build::Config::new()
  // .enable_client(true)
  // .build(&["proto/demodtelemetry.proto", "proto/sampleproxy.proto"], &["proto/"])
  // .unwrap_or_else(|e| panic!("protobuf compilation failed: {}", e));
  // Ok(())

}
