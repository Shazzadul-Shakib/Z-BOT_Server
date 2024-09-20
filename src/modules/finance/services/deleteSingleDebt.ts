import { Debt } from "../finance.model";

export const deleteSingledebt = async (
  ownerUserId: string,
  debtId: string
) => {
  const result = await Debt.findOneAndDelete({
    ownerUserId,
    _id: debtId,
  });

  return { success: true, message: "Debt deleted successfully" };
};
