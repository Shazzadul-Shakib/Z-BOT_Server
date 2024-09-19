import { Expense } from "../finance.model";

export const getAllExpense = async (ownerUserId: string) => {
  const result = await Expense.find({ ownerUserId });

  return { success: true, message: "All expenses retrived successfully",result };
};
