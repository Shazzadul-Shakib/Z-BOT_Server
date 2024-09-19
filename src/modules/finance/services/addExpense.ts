import { TExpense } from "../finance.interface";
import { Expense } from "../finance.model";

export const addNewExpense = async (ownerUserId: string, payload: TExpense) => {
  const result = await Expense.create(payload);

  return { success: true, message: "New Expense added successfully", result };
};
