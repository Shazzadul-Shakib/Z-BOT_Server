import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { financeServices } from "./services";

const addWallet = tryCatch(async (req, res) => {
  const result = await financeServices.addWallet(req.body);
  
  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

export const financeController = {
  addWallet,
};
