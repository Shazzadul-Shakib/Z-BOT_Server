import { Schema } from "mongoose"

export type TWallet = {
  _id: Schema.Types.ObjectId;
  walletName:string;
  walletBalance:number;
  walletOwnerId:string;
};

export type WalletPayload= Pick<{walletOwnerId:string},"walletOwnerId">