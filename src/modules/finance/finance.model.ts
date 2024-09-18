import { model, Schema } from "mongoose";
import { TWallet } from "./finance.interface";

const WalletSchema = new Schema<TWallet>(
  {
    walletName: { type: String, required: true },
    walletBalance: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Wallet = model("wallets", WalletSchema);
