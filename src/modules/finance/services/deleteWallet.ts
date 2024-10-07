import { Wallet } from "../finance.model";

export const deleteWallet = async (walletOwnerId: string, walletId: string) => {
  const result = await Wallet.findOneAndDelete({
    walletOwnerId,
    _id: walletId,
  });

  return {success:true,message:"Wallet deleted successfully",result}
};
