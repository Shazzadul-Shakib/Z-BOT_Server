import { WalletPayload } from "../finance.interface";
import { Wallet } from "../finance.model";

export const getAllWallet = async (walletOwnerId: string) => {
  const result = await Wallet.find({ walletOwnerId });

  return {
    success: true,
    message: "All wallets retrived successfully!",
    result,
  };
};
