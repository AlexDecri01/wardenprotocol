// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/base/store/v1beta1/listening.proto (package cosmos.base.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * @generated from message cosmos.base.store.v1beta1.StoreKVPair
 */
export class StoreKVPair extends Message<StoreKVPair> {
  /**
   * the store key for the KVStore this pair originates from
   *
   * @generated from field: string store_key = 1;
   */
  storeKey = "";

  /**
   * true indicates a delete operation, false indicates a set operation
   *
   * @generated from field: bool delete = 2;
   */
  delete = false;

  /**
   * @generated from field: bytes key = 3;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 4;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<StoreKVPair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.store.v1beta1.StoreKVPair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "store_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreKVPair {
    return new StoreKVPair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreKVPair {
    return new StoreKVPair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreKVPair {
    return new StoreKVPair().fromJsonString(jsonString, options);
  }

  static equals(a: StoreKVPair | PlainMessage<StoreKVPair> | undefined, b: StoreKVPair | PlainMessage<StoreKVPair> | undefined): boolean {
    return proto3.util.equals(StoreKVPair, a, b);
  }
}

