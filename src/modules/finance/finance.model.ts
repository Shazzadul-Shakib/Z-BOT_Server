import { model, Schema } from "mongoose";
import { TExpense, TWallet } from "./finance.interface";

const WalletSchema = new Schema<TWallet>(
  {
    walletName: { type: String, required: true },
    walletBalance: { type: Number, required: true },
    walletOwnerId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Wallet = model("wallets", WalletSchema);

const ExpenseSchema = new Schema<TExpense>({
  expenseName: { type: String, required: true },
  expenseCategory: { type: String, required: true },
  expenseAmount: { type: Number, required: true },
  expenseDate: { type: String, required: true },
  walletName: { type: String, required: true },
  walletId: { type: String, required: true },
  ownerUserId: { type: String, required: true },
});

export const Expense=model("expenses",ExpenseSchema);