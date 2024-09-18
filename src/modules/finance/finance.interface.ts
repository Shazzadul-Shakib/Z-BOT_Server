import { Schema } from "mongoose"

export type TWallet = {
  _id: Schema.Types.ObjectId;
  walletName:string;
  walletBalance:number;
};