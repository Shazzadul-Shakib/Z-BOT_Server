import { Debt } from "../finance.model";

export const getAllDebts = async (ownerUserId: string) => {
  const result = await Debt.find({ ownerUserId });

  return { success: true, message: "All debts retrived successfully", result };
};
