// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/base/store/v1beta1/snapshot.proto (package cosmos.base.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * @generated from message cosmos.base.store.v1beta1.SnapshotItem
 */
export class SnapshotItem extends Message<SnapshotItem> {
  /**
   * item is the specific type of snapshot item.
   *
   * @generated from oneof cosmos.base.store.v1beta1.SnapshotItem.item
   */
  item: {
    /**
     * @generated from field: cosmos.base.store.v1beta1.SnapshotStoreItem store = 1;
     */
    value: SnapshotStoreItem;
    case: "store";
  } | {
    /**
     * @generated from field: cosmos.base.store.v1beta1.SnapshotIAVLItem iavl = 2;
     */
    value: SnapshotIAVLItem;
    case: "iavl";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<SnapshotItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.store.v1beta1.SnapshotItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "store", kind: "message", T: SnapshotStoreItem, oneof: "item" },
    { no: 2, name: "iavl", kind: "message", T: SnapshotIAVLItem, oneof: "item" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotItem {
    return new SnapshotItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotItem {
    return new SnapshotItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotItem {
    return new SnapshotItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotItem | PlainMessage<SnapshotItem> | undefined, b: SnapshotItem | PlainMessage<SnapshotItem> | undefined): boolean {
    return proto3.util.equals(SnapshotItem, a, b);
  }
}

/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * @generated from message cosmos.base.store.v1beta1.SnapshotStoreItem
 */
export class SnapshotStoreItem extends Message<SnapshotStoreItem> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<SnapshotStoreItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.store.v1beta1.SnapshotStoreItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotStoreItem {
    return new SnapshotStoreItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined, b: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined): boolean {
    return proto3.util.equals(SnapshotStoreItem, a, b);
  }
}

/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * @generated from message cosmos.base.store.v1beta1.SnapshotIAVLItem
 */
export class SnapshotIAVLItem extends Message<SnapshotIAVLItem> {
  /**
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  /**
   * @generated from field: int64 version = 3;
   */
  version = protoInt64.zero;

  /**
   * @generated from field: int32 height = 4;
   */
  height = 0;

  constructor(data?: PartialMessage<SnapshotIAVLItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.store.v1beta1.SnapshotIAVLItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "height", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotIAVLItem {
    return new SnapshotIAVLItem().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined, b: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined): boolean {
    return proto3.util.equals(SnapshotIAVLItem, a, b);
  }
}

