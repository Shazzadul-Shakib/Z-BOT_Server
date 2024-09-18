import { TWallet } from "../finance.interface";
import { Wallet } from "../finance.model";

export const addWallet = async (payload: TWallet) => {
  const result = await Wallet.create(payload);
  return { success: true, message: "New wallet created succesfully", result };
};
