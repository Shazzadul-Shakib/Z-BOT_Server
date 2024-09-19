import { TExpense } from "../finance.interface";
import { Expense, Savings, Wallet } from "../finance.model";

export const addNewExpense = async (ownerUserId: string, payload: TExpense) => {
  const { walletId, expenseAmount, expenseCategory } = payload;

  // add savings expense to savings collection
  if (expenseCategory === "Savings") {
    await Savings.create(payload);
  }

  const wallet = await Wallet.findOne({
    walletOwnerId: ownerUserId,
    _id: walletId,
  });

  if (!wallet) {
    throw new Error("Wallet not found.");
  }

  // Check if the walletBalance is 0
  if (wallet.walletBalance === 0) {
    return {
      success: false,
      message:
        "Your selected wallet balance is zero. Try another wallet or create a new one.",
    };
  } else {
    const result = await Expense.create(payload);

    // update balance of wallet with mongodb aggregation pipeline
    const updatedWallet = await Wallet.findOneAndUpdate(
      { walletOwnerId: ownerUserId, _id: walletId },
      [
        {
          $set: {
            walletBalance: {
              $subtract: ["$walletBalance", Number(expenseAmount)],
            },
          },
        },
      ],
      { new: true }
    );
    return { success: true, message: "New Expense added successfully", result };
  }
};
