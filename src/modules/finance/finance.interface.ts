import { Schema } from "mongoose";

export type TWallet = {
  _id: Schema.Types.ObjectId;
  walletName: string;
  walletBalance: number;
  initialBalance: number;
  walletOwnerId: string;
};

export type WalletPayload = Pick<{ walletOwnerId: string }, "walletOwnerId">;
export type DeleteWalletPayload = Pick<
  { walletOwnerId: string; _id: string },
  "walletOwnerId" | "_id"
>;

export type TExpense = {
  _id: Schema.Types.ObjectId;
  expenseName: string;
  expenseCategory: string;
  expenseAmount: number;
  expenseDate: string;
  walletName: string;
  walletId: string;
  ownerUserId: string;
};

export type ExpensePayload = {
  month: number;
};

export type TDebt = {
  _id: Schema.Types.ObjectId;
  debtOwnerName: string;
  debtDate: string;
  debtAmount: number;
  debtPaid: boolean;
  ownerUserId: string;
};

export type DebtPayload = Pick<{ debtPaid: boolean }, "debtPaid">;

export type UpdateWalletPayload = {
  walletId: string;
  addableAmount: number;
};
