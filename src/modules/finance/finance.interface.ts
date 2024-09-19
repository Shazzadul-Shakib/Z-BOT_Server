import { Schema } from "mongoose";

export type TWallet = {
  _id: Schema.Types.ObjectId;
  walletName: string;
  walletBalance: number;
  walletOwnerId: string;
};

export type WalletPayload = Pick<{ walletOwnerId: string }, "walletOwnerId">;

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

export type TDebt={
  _id:Schema.Types.ObjectId;
  debtOwnerName:string;
  debtDate:string;
  debtAmount:number;
  debtPaid:boolean;
  ownerUserId:string;
}
