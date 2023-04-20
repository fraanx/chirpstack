// source: common/common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.common.Aggregation', null, global);
goog.exportSymbol('proto.common.KeyEnvelope', null, global);
goog.exportSymbol('proto.common.Location', null, global);
goog.exportSymbol('proto.common.LocationSource', null, global);
goog.exportSymbol('proto.common.MType', null, global);
goog.exportSymbol('proto.common.MacVersion', null, global);
goog.exportSymbol('proto.common.Metric', null, global);
goog.exportSymbol('proto.common.MetricDataset', null, global);
goog.exportSymbol('proto.common.MetricKind', null, global);
goog.exportSymbol('proto.common.Modulation', null, global);
goog.exportSymbol('proto.common.RegParamsRevision', null, global);
goog.exportSymbol('proto.common.Region', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.Location.displayName = 'proto.common.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.KeyEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.KeyEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.KeyEnvelope.displayName = 'proto.common.KeyEnvelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.Metric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.Metric.repeatedFields_, null);
};
goog.inherits(proto.common.Metric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.Metric.displayName = 'proto.common.Metric';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.MetricDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.MetricDataset.repeatedFields_, null);
};
goog.inherits(proto.common.MetricDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.MetricDataset.displayName = 'proto.common.MetricDataset';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    source: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.Location}
 */
proto.common.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Location;
  return proto.common.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Location}
 */
proto.common.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAltitude(value);
      break;
    case 4:
      var value = /** @type {!proto.common.LocationSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccuracy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.common.Location.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Location} returns this
 */
proto.common.Location.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.common.Location.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Location} returns this
 */
proto.common.Location.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double altitude = 3;
 * @return {number}
 */
proto.common.Location.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Location} returns this
 */
proto.common.Location.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional LocationSource source = 4;
 * @return {!proto.common.LocationSource}
 */
proto.common.Location.prototype.getSource = function() {
  return /** @type {!proto.common.LocationSource} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.common.LocationSource} value
 * @return {!proto.common.Location} returns this
 */
proto.common.Location.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional float accuracy = 5;
 * @return {number}
 */
proto.common.Location.prototype.getAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Location} returns this
 */
proto.common.Location.prototype.setAccuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.KeyEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.common.KeyEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.KeyEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.KeyEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    kekLabel: jspb.Message.getFieldWithDefault(msg, 1, ""),
    aesKey: msg.getAesKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.KeyEnvelope}
 */
proto.common.KeyEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.KeyEnvelope;
  return proto.common.KeyEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.KeyEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.KeyEnvelope}
 */
proto.common.KeyEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKekLabel(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAesKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.KeyEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.KeyEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.KeyEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.KeyEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKekLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAesKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string kek_label = 1;
 * @return {string}
 */
proto.common.KeyEnvelope.prototype.getKekLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.KeyEnvelope} returns this
 */
proto.common.KeyEnvelope.prototype.setKekLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes aes_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.KeyEnvelope.prototype.getAesKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes aes_key = 2;
 * This is a type-conversion wrapper around `getAesKey()`
 * @return {string}
 */
proto.common.KeyEnvelope.prototype.getAesKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAesKey()));
};


/**
 * optional bytes aes_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAesKey()`
 * @return {!Uint8Array}
 */
proto.common.KeyEnvelope.prototype.getAesKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAesKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.KeyEnvelope} returns this
 */
proto.common.KeyEnvelope.prototype.setAesKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.Metric.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Metric.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Metric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Metric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Metric.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestampsList: jspb.Message.toObjectList(msg.getTimestampsList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance),
    datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    proto.common.MetricDataset.toObject, includeInstance),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.Metric}
 */
proto.common.Metric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Metric;
  return proto.common.Metric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Metric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Metric}
 */
proto.common.Metric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addTimestamps(value);
      break;
    case 3:
      var value = new proto.common.MetricDataset;
      reader.readMessage(value,proto.common.MetricDataset.deserializeBinaryFromReader);
      msg.addDatasets(value);
      break;
    case 4:
      var value = /** @type {!proto.common.MetricKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Metric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Metric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Metric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Metric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestampsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.common.MetricDataset.serializeBinaryToWriter
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.common.Metric.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Metric} returns this
 */
proto.common.Metric.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated google.protobuf.Timestamp timestamps = 2;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.common.Metric.prototype.getTimestampsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Timestamp>} value
 * @return {!proto.common.Metric} returns this
*/
proto.common.Metric.prototype.setTimestampsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.common.Metric.prototype.addTimestamps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.common.Metric} returns this
 */
proto.common.Metric.prototype.clearTimestampsList = function() {
  return this.setTimestampsList([]);
};


/**
 * repeated MetricDataset datasets = 3;
 * @return {!Array<!proto.common.MetricDataset>}
 */
proto.common.Metric.prototype.getDatasetsList = function() {
  return /** @type{!Array<!proto.common.MetricDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.MetricDataset, 3));
};


/**
 * @param {!Array<!proto.common.MetricDataset>} value
 * @return {!proto.common.Metric} returns this
*/
proto.common.Metric.prototype.setDatasetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.common.MetricDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.MetricDataset}
 */
proto.common.Metric.prototype.addDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.common.MetricDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.common.Metric} returns this
 */
proto.common.Metric.prototype.clearDatasetsList = function() {
  return this.setDatasetsList([]);
};


/**
 * optional MetricKind kind = 4;
 * @return {!proto.common.MetricKind}
 */
proto.common.Metric.prototype.getKind = function() {
  return /** @type {!proto.common.MetricKind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.common.MetricKind} value
 * @return {!proto.common.Metric} returns this
 */
proto.common.Metric.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.MetricDataset.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.MetricDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.common.MetricDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.MetricDataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MetricDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.MetricDataset}
 */
proto.common.MetricDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.MetricDataset;
  return proto.common.MetricDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.MetricDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.MetricDataset}
 */
proto.common.MetricDataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setDataList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.MetricDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.MetricDataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.MetricDataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MetricDataset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.common.MetricDataset.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.MetricDataset} returns this
 */
proto.common.MetricDataset.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated float data = 2;
 * @return {!Array<number>}
 */
proto.common.MetricDataset.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.common.MetricDataset} returns this
 */
proto.common.MetricDataset.prototype.setDataList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.common.MetricDataset} returns this
 */
proto.common.MetricDataset.prototype.addData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.common.MetricDataset} returns this
 */
proto.common.MetricDataset.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * @enum {number}
 */
proto.common.Modulation = {
  LORA: 0,
  FSK: 1,
  LR_FHSS: 2
};

/**
 * @enum {number}
 */
proto.common.Region = {
  EU868: 0,
  US915: 2,
  CN779: 3,
  EU433: 4,
  AU915: 5,
  CN470: 6,
  AS923: 7,
  AS923_2: 12,
  AS923_3: 13,
  AS923_4: 14,
  KR920: 8,
  IN865: 9,
  RU864: 10,
  ISM2400: 11,
  SS001: 15
};

/**
 * @enum {number}
 */
proto.common.MType = {
  JOIN_REQUEST: 0,
  JOIN_ACCEPT: 1,
  UNCONFIRMED_DATA_UP: 2,
  UNCONFIRMED_DATA_DOWN: 3,
  CONFIRMED_DATA_UP: 4,
  CONFIRMED_DATA_DOWN: 5,
  REJOIN_REQUEST: 6,
  PROPRIETARY: 7
};

/**
 * @enum {number}
 */
proto.common.MacVersion = {
  LORAWAN_1_0_0: 0,
  LORAWAN_1_0_1: 1,
  LORAWAN_1_0_2: 2,
  LORAWAN_1_0_3: 3,
  LORAWAN_1_0_4: 4,
  LORAWAN_1_1_0: 5
};

/**
 * @enum {number}
 */
proto.common.RegParamsRevision = {
  A: 0,
  B: 1,
  RP002_1_0_0: 2,
  RP002_1_0_1: 3,
  RP002_1_0_2: 4,
  RP002_1_0_3: 5
};

/**
 * @enum {number}
 */
proto.common.LocationSource = {
  UNKNOWN: 0,
  GPS: 1,
  CONFIG: 2,
  GEO_RESOLVER_TDOA: 3,
  GEO_RESOLVER_RSSI: 4,
  GEO_RESOLVER_GNSS: 5,
  GEO_RESOLVER_WIFI: 6
};

/**
 * @enum {number}
 */
proto.common.Aggregation = {
  HOUR: 0,
  DAY: 1,
  MONTH: 2
};

/**
 * @enum {number}
 */
proto.common.MetricKind = {
  COUNTER: 0,
  ABSOLUTE: 1,
  GAUGE: 2
};

goog.object.extend(exports, proto.common);
