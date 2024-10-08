import { UpdateWalletPayload } from "../finance.interface";
import { Expense, Wallet } from "../finance.model";

export const deleteSingleExpense = async (
  ownerUserId: string,
  expenseId: string,
  payload: UpdateWalletPayload
) => {
  const { walletId, addableAmount } = payload;

  const result = await Expense.findOneAndDelete({
    ownerUserId,
    _id: expenseId,
  });

  //   if delete expense then amount will be added to wallet again
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

  return { success: true, message: "Expense deleted successfully" };
};
