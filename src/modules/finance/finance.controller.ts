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
  if (!result.success) {
    return res.send({ message: result.message });
  }
});

// Get all expenses
const getAllExpenses = tryCatch(async (req, res) => {
  const { ownerUserId } = req.params;
  const result = await financeServices.getAllExpense(ownerUserId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Get all savings
const getAllSavings = tryCatch(async (req, res) => {
  const { ownerUserId } = req.params;
  const result = await financeServices.getAllSavings(ownerUserId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Add new debt
const addNewDebt = tryCatch(async (req, res) => {
  const result = await financeServices.addNewDebt(req.body);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Get all debts
const getAllDebts = tryCatch(async (req, res) => {
  const { ownerUserId } = req.params;
  const result = await financeServices.getAllDebts(ownerUserId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Update debt paid status
const updateDebtPaidStatus = tryCatch(async (req, res) => {
  const { ownerUserId, debtId } = req.params;
  const result = await financeServices.updateDebtPaidStatus(ownerUserId,debtId,req.body);

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
  getAllWallet,
  addNewExpense,
  getAllExpenses,
  getAllSavings,
  addNewDebt,
  getAllDebts,
  updateDebtPaidStatus,
};
