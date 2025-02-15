// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { SetGPIOResultCode } from '../../../open-shock/serialization/local/set-gpioresult-code';


export class SetRfTxPinCommandResult {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetRfTxPinCommandResult {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetRfTxPinCommandResult(bb:flatbuffers.ByteBuffer, obj?:SetRfTxPinCommandResult):SetRfTxPinCommandResult {
  return (obj || new SetRfTxPinCommandResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetRfTxPinCommandResult(bb:flatbuffers.ByteBuffer, obj?:SetRfTxPinCommandResult):SetRfTxPinCommandResult {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetRfTxPinCommandResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

pin():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

result():SetGPIOResultCode {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : SetGPIOResultCode.Success;
}

static startSetRfTxPinCommandResult(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addPin(builder:flatbuffers.Builder, pin:number) {
  builder.addFieldInt8(0, pin, 0);
}

static addResult(builder:flatbuffers.Builder, result:SetGPIOResultCode) {
  builder.addFieldInt8(1, result, SetGPIOResultCode.Success);
}

static endSetRfTxPinCommandResult(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSetRfTxPinCommandResult(builder:flatbuffers.Builder, pin:number, result:SetGPIOResultCode):flatbuffers.Offset {
  SetRfTxPinCommandResult.startSetRfTxPinCommandResult(builder);
  SetRfTxPinCommandResult.addPin(builder, pin);
  SetRfTxPinCommandResult.addResult(builder, result);
  return SetRfTxPinCommandResult.endSetRfTxPinCommandResult(builder);
}
}
