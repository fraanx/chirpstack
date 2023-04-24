// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.21.9
// source: meta/meta.proto

package meta

import (
	common "github.com/fraanx/chirpstack/api/go/v4/common"
	gw "github.com/fraanx/chirpstack/api/go/v4/gw"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UplinkMeta struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Device EUI (EUI64).
	DevEui string `protobuf:"bytes,1,opt,name=dev_eui,json=devEui,proto3" json:"dev_eui,omitempty"`
	// TX meta-data.
	TxInfo *gw.UplinkTxInfo `protobuf:"bytes,2,opt,name=tx_info,json=txInfo,proto3" json:"tx_info,omitempty"`
	// RX meta-data.
	RxInfo []*gw.UplinkRxInfo `protobuf:"bytes,3,rep,name=rx_info,json=rxInfo,proto3" json:"rx_info,omitempty"`
	// PHYPayload byte count.
	PhyPayloadByteCount uint32 `protobuf:"varint,4,opt,name=phy_payload_byte_count,json=phyPayloadByteCount,proto3" json:"phy_payload_byte_count,omitempty"`
	// MAC-Command byte count.
	MacCommandByteCount uint32 `protobuf:"varint,5,opt,name=mac_command_byte_count,json=macCommandByteCount,proto3" json:"mac_command_byte_count,omitempty"`
	// Application payload byte count.
	ApplicationPayloadByteCount uint32 `protobuf:"varint,6,opt,name=application_payload_byte_count,json=applicationPayloadByteCount,proto3" json:"application_payload_byte_count,omitempty"`
	// Message type.
	MessageType common.MType `protobuf:"varint,7,opt,name=message_type,json=messageType,proto3,enum=common.MType" json:"message_type,omitempty"`
}

func (x *UplinkMeta) Reset() {
	*x = UplinkMeta{}
	if protoimpl.UnsafeEnabled {
		mi := &file_meta_meta_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UplinkMeta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UplinkMeta) ProtoMessage() {}

func (x *UplinkMeta) ProtoReflect() protoreflect.Message {
	mi := &file_meta_meta_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UplinkMeta.ProtoReflect.Descriptor instead.
func (*UplinkMeta) Descriptor() ([]byte, []int) {
	return file_meta_meta_proto_rawDescGZIP(), []int{0}
}

func (x *UplinkMeta) GetDevEui() string {
	if x != nil {
		return x.DevEui
	}
	return ""
}

func (x *UplinkMeta) GetTxInfo() *gw.UplinkTxInfo {
	if x != nil {
		return x.TxInfo
	}
	return nil
}

func (x *UplinkMeta) GetRxInfo() []*gw.UplinkRxInfo {
	if x != nil {
		return x.RxInfo
	}
	return nil
}

func (x *UplinkMeta) GetPhyPayloadByteCount() uint32 {
	if x != nil {
		return x.PhyPayloadByteCount
	}
	return 0
}

func (x *UplinkMeta) GetMacCommandByteCount() uint32 {
	if x != nil {
		return x.MacCommandByteCount
	}
	return 0
}

func (x *UplinkMeta) GetApplicationPayloadByteCount() uint32 {
	if x != nil {
		return x.ApplicationPayloadByteCount
	}
	return 0
}

func (x *UplinkMeta) GetMessageType() common.MType {
	if x != nil {
		return x.MessageType
	}
	return common.MType(0)
}

type DownlinkMeta struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Device EUI (EUI64).
	DevEui string `protobuf:"bytes,1,opt,name=dev_eui,json=devEui,proto3" json:"dev_eui,omitempty"`
	// Multicast Group ID (UUID).
	MulticastGroupId string `protobuf:"bytes,2,opt,name=multicast_group_id,json=multicastGroupId,proto3" json:"multicast_group_id,omitempty"`
	// TX meta-data.
	TxInfo *gw.DownlinkTxInfo `protobuf:"bytes,3,opt,name=tx_info,json=txInfo,proto3" json:"tx_info,omitempty"`
	// PHYPayload byte count.
	PhyPayloadByteCount uint32 `protobuf:"varint,4,opt,name=phy_payload_byte_count,json=phyPayloadByteCount,proto3" json:"phy_payload_byte_count,omitempty"`
	// MAC-Command byte count.
	MacCommandByteCount uint32 `protobuf:"varint,5,opt,name=mac_command_byte_count,json=macCommandByteCount,proto3" json:"mac_command_byte_count,omitempty"`
	// Application payload byte count.
	ApplicationPayloadByteCount uint32 `protobuf:"varint,6,opt,name=application_payload_byte_count,json=applicationPayloadByteCount,proto3" json:"application_payload_byte_count,omitempty"`
	// Message type.
	MessageType common.MType `protobuf:"varint,7,opt,name=message_type,json=messageType,proto3,enum=common.MType" json:"message_type,omitempty"`
	// Gateway ID (EUI64).
	GatewayId string `protobuf:"bytes,8,opt,name=gateway_id,json=gatewayId,proto3" json:"gateway_id,omitempty"`
}

func (x *DownlinkMeta) Reset() {
	*x = DownlinkMeta{}
	if protoimpl.UnsafeEnabled {
		mi := &file_meta_meta_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DownlinkMeta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DownlinkMeta) ProtoMessage() {}

func (x *DownlinkMeta) ProtoReflect() protoreflect.Message {
	mi := &file_meta_meta_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DownlinkMeta.ProtoReflect.Descriptor instead.
func (*DownlinkMeta) Descriptor() ([]byte, []int) {
	return file_meta_meta_proto_rawDescGZIP(), []int{1}
}

func (x *DownlinkMeta) GetDevEui() string {
	if x != nil {
		return x.DevEui
	}
	return ""
}

func (x *DownlinkMeta) GetMulticastGroupId() string {
	if x != nil {
		return x.MulticastGroupId
	}
	return ""
}

func (x *DownlinkMeta) GetTxInfo() *gw.DownlinkTxInfo {
	if x != nil {
		return x.TxInfo
	}
	return nil
}

func (x *DownlinkMeta) GetPhyPayloadByteCount() uint32 {
	if x != nil {
		return x.PhyPayloadByteCount
	}
	return 0
}

func (x *DownlinkMeta) GetMacCommandByteCount() uint32 {
	if x != nil {
		return x.MacCommandByteCount
	}
	return 0
}

func (x *DownlinkMeta) GetApplicationPayloadByteCount() uint32 {
	if x != nil {
		return x.ApplicationPayloadByteCount
	}
	return 0
}

func (x *DownlinkMeta) GetMessageType() common.MType {
	if x != nil {
		return x.MessageType
	}
	return common.MType(0)
}

func (x *DownlinkMeta) GetGatewayId() string {
	if x != nil {
		return x.GatewayId
	}
	return ""
}

var File_meta_meta_proto protoreflect.FileDescriptor

var file_meta_meta_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x6d, 0x65, 0x74, 0x61, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x67, 0x77,
	0x2f, 0x67, 0x77, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdc, 0x02, 0x0a, 0x0a, 0x55, 0x70,
	0x6c, 0x69, 0x6e, 0x6b, 0x4d, 0x65, 0x74, 0x61, 0x12, 0x17, 0x0a, 0x07, 0x64, 0x65, 0x76, 0x5f,
	0x65, 0x75, 0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x76, 0x45, 0x75,
	0x69, 0x12, 0x29, 0x0a, 0x07, 0x74, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x67, 0x77, 0x2e, 0x55, 0x70, 0x6c, 0x69, 0x6e, 0x6b, 0x54, 0x78,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x74, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x29, 0x0a, 0x07,
	0x72, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x67, 0x77, 0x2e, 0x55, 0x70, 0x6c, 0x69, 0x6e, 0x6b, 0x52, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x06, 0x72, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x33, 0x0a, 0x16, 0x70, 0x68, 0x79, 0x5f, 0x70,
	0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x13, 0x70, 0x68, 0x79, 0x50, 0x61, 0x79, 0x6c,
	0x6f, 0x61, 0x64, 0x42, 0x79, 0x74, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x33, 0x0a, 0x16,
	0x6d, 0x61, 0x63, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x5f, 0x62, 0x79, 0x74, 0x65,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x13, 0x6d, 0x61,
	0x63, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x42, 0x79, 0x74, 0x65, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x12, 0x43, 0x0a, 0x1e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x5f, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x1b, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x42, 0x79, 0x74,
	0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x30, 0x0a, 0x0c, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0d, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x4d, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0b, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x22, 0x82, 0x03, 0x0a, 0x0c, 0x44, 0x6f, 0x77,
	0x6e, 0x6c, 0x69, 0x6e, 0x6b, 0x4d, 0x65, 0x74, 0x61, 0x12, 0x17, 0x0a, 0x07, 0x64, 0x65, 0x76,
	0x5f, 0x65, 0x75, 0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x76, 0x45,
	0x75, 0x69, 0x12, 0x2c, 0x0a, 0x12, 0x6d, 0x75, 0x6c, 0x74, 0x69, 0x63, 0x61, 0x73, 0x74, 0x5f,
	0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10,
	0x6d, 0x75, 0x6c, 0x74, 0x69, 0x63, 0x61, 0x73, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64,
	0x12, 0x2b, 0x0a, 0x07, 0x74, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x12, 0x2e, 0x67, 0x77, 0x2e, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x69, 0x6e, 0x6b, 0x54,
	0x78, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x74, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x33, 0x0a,
	0x16, 0x70, 0x68, 0x79, 0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x62, 0x79, 0x74,
	0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x13, 0x70,
	0x68, 0x79, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x42, 0x79, 0x74, 0x65, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x12, 0x33, 0x0a, 0x16, 0x6d, 0x61, 0x63, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e,
	0x64, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x13, 0x6d, 0x61, 0x63, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x42, 0x79,
	0x74, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x43, 0x0a, 0x1e, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x62,
	0x79, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x1b, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x61, 0x79, 0x6c,
	0x6f, 0x61, 0x64, 0x42, 0x79, 0x74, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x30, 0x0a, 0x0c,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x0d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x4d, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x0b, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1d,
	0x0a, 0x0a, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x49, 0x64, 0x42, 0x64, 0x0a,
	0x16, 0x69, 0x6f, 0x2e, 0x63, 0x68, 0x69, 0x72, 0x70, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x42, 0x09, 0x4d, 0x65, 0x74, 0x61, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x66, 0x72, 0x61, 0x61, 0x6e, 0x78, 0x2f, 0x63, 0x68, 0x69, 0x72, 0x70, 0x73, 0x74, 0x61,
	0x63, 0x6b, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x34, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0xaa, 0x02, 0x0f, 0x43, 0x68, 0x69, 0x72, 0x70, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_meta_meta_proto_rawDescOnce sync.Once
	file_meta_meta_proto_rawDescData = file_meta_meta_proto_rawDesc
)

func file_meta_meta_proto_rawDescGZIP() []byte {
	file_meta_meta_proto_rawDescOnce.Do(func() {
		file_meta_meta_proto_rawDescData = protoimpl.X.CompressGZIP(file_meta_meta_proto_rawDescData)
	})
	return file_meta_meta_proto_rawDescData
}

var file_meta_meta_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_meta_meta_proto_goTypes = []interface{}{
	(*UplinkMeta)(nil),        // 0: meta.UplinkMeta
	(*DownlinkMeta)(nil),      // 1: meta.DownlinkMeta
	(*gw.UplinkTxInfo)(nil),   // 2: gw.UplinkTxInfo
	(*gw.UplinkRxInfo)(nil),   // 3: gw.UplinkRxInfo
	(common.MType)(0),         // 4: common.MType
	(*gw.DownlinkTxInfo)(nil), // 5: gw.DownlinkTxInfo
}
var file_meta_meta_proto_depIdxs = []int32{
	2, // 0: meta.UplinkMeta.tx_info:type_name -> gw.UplinkTxInfo
	3, // 1: meta.UplinkMeta.rx_info:type_name -> gw.UplinkRxInfo
	4, // 2: meta.UplinkMeta.message_type:type_name -> common.MType
	5, // 3: meta.DownlinkMeta.tx_info:type_name -> gw.DownlinkTxInfo
	4, // 4: meta.DownlinkMeta.message_type:type_name -> common.MType
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_meta_meta_proto_init() }
func file_meta_meta_proto_init() {
	if File_meta_meta_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_meta_meta_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UplinkMeta); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_meta_meta_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DownlinkMeta); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_meta_meta_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_meta_meta_proto_goTypes,
		DependencyIndexes: file_meta_meta_proto_depIdxs,
		MessageInfos:      file_meta_meta_proto_msgTypes,
	}.Build()
	File_meta_meta_proto = out.File
	file_meta_meta_proto_rawDesc = nil
	file_meta_meta_proto_goTypes = nil
	file_meta_meta_proto_depIdxs = nil
}
