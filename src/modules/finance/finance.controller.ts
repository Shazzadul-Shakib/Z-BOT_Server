import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { financeServices } from "./services";

// Add wallet
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

// Get all wallet

const getAllWallet = tryCatch(async (req, res) => {
  const { walletOwnerId } = req.params;
  const result = await financeServices.getAllWallet(walletOwnerId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Add new expense
const addNewExpense = tryCatch(async (req, res) => {
  const { ownerUserId } = req.params;
  const result = await financeServices.addNewExpense(ownerUserId, req.body);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  } 
  if(!result.success) {
    return res.send({message:result.message});
  }
});

export const financeController = {
  addWallet,
  getAllWallet,
  addNewExpense,
};
