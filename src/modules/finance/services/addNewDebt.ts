import { TDebt } from "../finance.interface";
import { Debt } from "../finance.model";

export const addNewDebt = async (payload: TDebt) => {
  const result = await Debt.create(payload);
  return { success: true, message: "Newdebt created successfully", result };
};
