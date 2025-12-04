fn main() -> Result<(), Box<dyn std::error::Error>> {
  tonic_build::configure()
      .compile(&["proto/demodtelemetry_service.proto"], &["proto"])
      .unwrap();
  Ok(())

}
