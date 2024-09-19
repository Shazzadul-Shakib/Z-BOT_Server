import { DebtPayload } from "../finance.interface";
import { Debt } from "../finance.model";

export const updateDebtPaidStatus = async (
  ownerUserId: string,
  debtId: string,
  payload: DebtPayload
) => {
  const { debtPaid } = payload;
  const result = await Debt.findOneAndUpdate(
    { ownerUserId, _id: debtId },
    {
      $set: {
        debtPaid: debtPaid,
      },
    },
    {
      new: true,
    }
  );

  return { success: true, message: "Updated paid status successfully", result };
};
