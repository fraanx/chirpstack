# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: chirpstack-api/api/device_profile.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from chirpstack_api.common import common_pb2 as chirpstack__api_dot_common_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\'chirpstack-api/api/device_profile.proto\x12\x03\x61pi\x1a\x1cgoogle/api/annotations.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\"chirpstack-api/common/common.proto\"\xe9\x07\n\rDeviceProfile\x12\n\n\x02id\x18\x01 \x01(\t\x12\x11\n\ttenant_id\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x1a \x01(\t\x12\x1e\n\x06region\x18\x04 \x01(\x0e\x32\x0e.common.Region\x12\'\n\x0bmac_version\x18\x05 \x01(\x0e\x32\x12.common.MacVersion\x12\x36\n\x13reg_params_revision\x18\x06 \x01(\x0e\x32\x19.common.RegParamsRevision\x12\x18\n\x10\x61\x64r_algorithm_id\x18\x07 \x01(\t\x12\x30\n\x15payload_codec_runtime\x18\x08 \x01(\x0e\x32\x11.api.CodecRuntime\x12\x1c\n\x14payload_codec_script\x18\t \x01(\t\x12\x1f\n\x17\x66lush_queue_on_activate\x18\n \x01(\x08\x12\x17\n\x0fuplink_interval\x18\x0b \x01(\r\x12\"\n\x1a\x64\x65vice_status_req_interval\x18\x0c \x01(\r\x12\x15\n\rsupports_otaa\x18\r \x01(\x08\x12\x18\n\x10supports_class_b\x18\x0e \x01(\x08\x12\x18\n\x10supports_class_c\x18\x0f \x01(\x08\x12\x17\n\x0f\x63lass_b_timeout\x18\x10 \x01(\r\x12\x1e\n\x16\x63lass_b_ping_slot_nb_k\x18\x11 \x01(\r\x12\x1c\n\x14\x63lass_b_ping_slot_dr\x18\x12 \x01(\r\x12\x1e\n\x16\x63lass_b_ping_slot_freq\x18\x13 \x01(\r\x12\x17\n\x0f\x63lass_c_timeout\x18\x14 \x01(\r\x12\x15\n\rabp_rx1_delay\x18\x15 \x01(\r\x12\x19\n\x11\x61\x62p_rx1_dr_offset\x18\x16 \x01(\r\x12\x12\n\nabp_rx2_dr\x18\x17 \x01(\r\x12\x14\n\x0c\x61\x62p_rx2_freq\x18\x18 \x01(\r\x12*\n\x04tags\x18\x19 \x03(\x0b\x32\x1c.api.DeviceProfile.TagsEntry\x12:\n\x0cmeasurements\x18\x1b \x03(\x0b\x32$.api.DeviceProfile.MeasurementsEntry\x12 \n\x18\x61uto_detect_measurements\x18\x1c \x01(\x08\x12\x18\n\x10region_config_id\x18\x1d \x01(\t\x1a+\n\tTagsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a\x45\n\x11MeasurementsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x1f\n\x05value\x18\x02 \x01(\x0b\x32\x10.api.Measurement:\x02\x38\x01\"?\n\x0bMeasurement\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\"\n\x04kind\x18\x03 \x01(\x0e\x32\x14.api.MeasurementKind\"\xdd\x02\n\x15\x44\x65viceProfileListItem\x12\n\n\x02id\x18\x01 \x01(\t\x12.\n\ncreated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12.\n\nupdated_at\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0c\n\x04name\x18\x04 \x01(\t\x12\x1e\n\x06region\x18\x05 \x01(\x0e\x32\x0e.common.Region\x12\'\n\x0bmac_version\x18\x06 \x01(\x0e\x32\x12.common.MacVersion\x12\x36\n\x13reg_params_revision\x18\x07 \x01(\x0e\x32\x19.common.RegParamsRevision\x12\x15\n\rsupports_otaa\x18\x08 \x01(\x08\x12\x18\n\x10supports_class_b\x18\t \x01(\x08\x12\x18\n\x10supports_class_c\x18\n \x01(\x08\"H\n\x1a\x43reateDeviceProfileRequest\x12*\n\x0e\x64\x65vice_profile\x18\x01 \x01(\x0b\x32\x12.api.DeviceProfile\")\n\x1b\x43reateDeviceProfileResponse\x12\n\n\x02id\x18\x01 \x01(\t\"%\n\x17GetDeviceProfileRequest\x12\n\n\x02id\x18\x01 \x01(\t\"\xa6\x01\n\x18GetDeviceProfileResponse\x12*\n\x0e\x64\x65vice_profile\x18\x01 \x01(\x0b\x32\x12.api.DeviceProfile\x12.\n\ncreated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12.\n\nupdated_at\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"H\n\x1aUpdateDeviceProfileRequest\x12*\n\x0e\x64\x65vice_profile\x18\x01 \x01(\x0b\x32\x12.api.DeviceProfile\"(\n\x1a\x44\x65leteDeviceProfileRequest\x12\n\n\x02id\x18\x01 \x01(\t\"]\n\x19ListDeviceProfilesRequest\x12\r\n\x05limit\x18\x01 \x01(\r\x12\x0e\n\x06offset\x18\x02 \x01(\r\x12\x0e\n\x06search\x18\x03 \x01(\t\x12\x11\n\ttenant_id\x18\x04 \x01(\t\"]\n\x1aListDeviceProfilesResponse\x12\x13\n\x0btotal_count\x18\x01 \x01(\r\x12*\n\x06result\x18\x02 \x03(\x0b\x32\x1a.api.DeviceProfileListItem\"h\n&ListDeviceProfileAdrAlgorithmsResponse\x12\x13\n\x0btotal_count\x18\x01 \x01(\r\x12)\n\x06result\x18\x02 \x03(\x0b\x32\x19.api.AdrAlgorithmListItem\"0\n\x14\x41\x64rAlgorithmListItem\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t*1\n\x0c\x43odecRuntime\x12\x08\n\x04NONE\x10\x00\x12\x0f\n\x0b\x43\x41YENNE_LPP\x10\x01\x12\x06\n\x02JS\x10\x02*P\n\x0fMeasurementKind\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0b\n\x07\x43OUNTER\x10\x01\x12\x0c\n\x08\x41\x42SOLUTE\x10\x02\x12\t\n\x05GAUGE\x10\x03\x12\n\n\x06STRING\x10\x04\x32\xb8\x05\n\x14\x44\x65viceProfileService\x12l\n\x06\x43reate\x12\x1f.api.CreateDeviceProfileRequest\x1a .api.CreateDeviceProfileResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\"\x14/api/device-profiles:\x01*\x12\x65\n\x03Get\x12\x1c.api.GetDeviceProfileRequest\x1a\x1d.api.GetDeviceProfileResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/api/device-profiles/{id}\x12v\n\x06Update\x12\x1f.api.UpdateDeviceProfileRequest\x1a\x16.google.protobuf.Empty\"3\x82\xd3\xe4\x93\x02-\x1a(/api/device-profiles/{device_profile.id}:\x01*\x12\x64\n\x06\x44\x65lete\x12\x1f.api.DeleteDeviceProfileRequest\x1a\x16.google.protobuf.Empty\"!\x82\xd3\xe4\x93\x02\x1b*\x19/api/device-profiles/{id}\x12\x65\n\x04List\x12\x1e.api.ListDeviceProfilesRequest\x1a\x1f.api.ListDeviceProfilesResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/api/device-profiles\x12\x85\x01\n\x11ListAdrAlgorithms\x12\x16.google.protobuf.Empty\x1a+.api.ListDeviceProfileAdrAlgorithmsResponse\"+\x82\xd3\xe4\x93\x02%\x12#/api/device-profiles/adr-algorithmsBf\n\x11io.chirpstack.apiB\x12\x44\x65viceProfileProtoP\x01Z*github.com/fraanx/chirpstack/api/go/v4/api\xaa\x02\x0e\x43hirpstack.Apib\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'chirpstack_api.api.device_profile_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021io.chirpstack.apiB\022DeviceProfileProtoP\001Z*github.com/fraanx/chirpstack/api/go/v4/api\252\002\016Chirpstack.Api'
  _DEVICEPROFILE_TAGSENTRY._options = None
  _DEVICEPROFILE_TAGSENTRY._serialized_options = b'8\001'
  _DEVICEPROFILE_MEASUREMENTSENTRY._options = None
  _DEVICEPROFILE_MEASUREMENTSENTRY._serialized_options = b'8\001'
  _DEVICEPROFILESERVICE.methods_by_name['Create']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['Create']._serialized_options = b'\202\323\344\223\002\031\"\024/api/device-profiles:\001*'
  _DEVICEPROFILESERVICE.methods_by_name['Get']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['Get']._serialized_options = b'\202\323\344\223\002\033\022\031/api/device-profiles/{id}'
  _DEVICEPROFILESERVICE.methods_by_name['Update']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['Update']._serialized_options = b'\202\323\344\223\002-\032(/api/device-profiles/{device_profile.id}:\001*'
  _DEVICEPROFILESERVICE.methods_by_name['Delete']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['Delete']._serialized_options = b'\202\323\344\223\002\033*\031/api/device-profiles/{id}'
  _DEVICEPROFILESERVICE.methods_by_name['List']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['List']._serialized_options = b'\202\323\344\223\002\026\022\024/api/device-profiles'
  _DEVICEPROFILESERVICE.methods_by_name['ListAdrAlgorithms']._options = None
  _DEVICEPROFILESERVICE.methods_by_name['ListAdrAlgorithms']._serialized_options = b'\202\323\344\223\002%\022#/api/device-profiles/adr-algorithms'
  _CODECRUNTIME._serialized_start=2384
  _CODECRUNTIME._serialized_end=2433
  _MEASUREMENTKIND._serialized_start=2435
  _MEASUREMENTKIND._serialized_end=2515
  _DEVICEPROFILE._serialized_start=177
  _DEVICEPROFILE._serialized_end=1178
  _DEVICEPROFILE_TAGSENTRY._serialized_start=1064
  _DEVICEPROFILE_TAGSENTRY._serialized_end=1107
  _DEVICEPROFILE_MEASUREMENTSENTRY._serialized_start=1109
  _DEVICEPROFILE_MEASUREMENTSENTRY._serialized_end=1178
  _MEASUREMENT._serialized_start=1180
  _MEASUREMENT._serialized_end=1243
  _DEVICEPROFILELISTITEM._serialized_start=1246
  _DEVICEPROFILELISTITEM._serialized_end=1595
  _CREATEDEVICEPROFILEREQUEST._serialized_start=1597
  _CREATEDEVICEPROFILEREQUEST._serialized_end=1669
  _CREATEDEVICEPROFILERESPONSE._serialized_start=1671
  _CREATEDEVICEPROFILERESPONSE._serialized_end=1712
  _GETDEVICEPROFILEREQUEST._serialized_start=1714
  _GETDEVICEPROFILEREQUEST._serialized_end=1751
  _GETDEVICEPROFILERESPONSE._serialized_start=1754
  _GETDEVICEPROFILERESPONSE._serialized_end=1920
  _UPDATEDEVICEPROFILEREQUEST._serialized_start=1922
  _UPDATEDEVICEPROFILEREQUEST._serialized_end=1994
  _DELETEDEVICEPROFILEREQUEST._serialized_start=1996
  _DELETEDEVICEPROFILEREQUEST._serialized_end=2036
  _LISTDEVICEPROFILESREQUEST._serialized_start=2038
  _LISTDEVICEPROFILESREQUEST._serialized_end=2131
  _LISTDEVICEPROFILESRESPONSE._serialized_start=2133
  _LISTDEVICEPROFILESRESPONSE._serialized_end=2226
  _LISTDEVICEPROFILEADRALGORITHMSRESPONSE._serialized_start=2228
  _LISTDEVICEPROFILEADRALGORITHMSRESPONSE._serialized_end=2332
  _ADRALGORITHMLISTITEM._serialized_start=2334
  _ADRALGORITHMLISTITEM._serialized_end=2382
  _DEVICEPROFILESERVICE._serialized_start=2518
  _DEVICEPROFILESERVICE._serialized_end=3214
# @@protoc_insertion_point(module_scope)
