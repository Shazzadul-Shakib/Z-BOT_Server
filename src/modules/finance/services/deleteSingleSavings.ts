import { UpdateWalletPayload } from "../finance.interface";
import { Savings, Wallet } from "../finance.model";

export const deleteSingleSavings = async (
  ownerUserId: string,
  savingsId: string,
  payload: UpdateWalletPayload
) => {
  console.log(payload);
  const { walletId, addableAmount } = payload;

  const result = await Savings.findOneAndDelete({
    ownerUserId,
    _id: savingsId,
  });

//   if delete savings then amount will be added to wallet again
  if (result) {
    await Wallet.findOneAndUpdate({ _id: walletId }, [
      {
        $set: {
          walletBalance: {
            $add: ["$walletBalance", Number(addableAmount)],
          },
        },
      },
    ]);
  }

  return { success: true, message: "Savings deleted successfully" };
};
