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

  //Prevent users from accessing data belonging to other users.
  if (walletOwnerId !== req?.user?.userId) {
    return res.status(403).json({ message: "Forbidden access" });
  }

  const result = await financeServices.getAllWallet(walletOwnerId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Delete single wallet
const deleteWallet=tryCatch(async(req,res)=>{
  const { walletOwnerId, walletId } = req.params;
  const result = await financeServices.deleteWallet(walletOwnerId, walletId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
})

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
  const { month } = req.query;

  //Prevent users from accessing data belonging to other users.
  if (ownerUserId !== req?.user?.userId) {
    return res.status(403).json({ message: "Forbidden access" });
  }

  const result = await financeServices.getAllExpense(
    ownerUserId,
    Number(month)
  );

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Delete single expense
const deleteSingleExpense = tryCatch(async (req, res) => {
  const { ownerUserId, expenseId } = req.params;
  const result = await financeServices.deleteSingleExpense(
    ownerUserId,
    expenseId,
    req.body
  );

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: [],
    });
  }
});

// Get all savings
const getAllSavings = tryCatch(async (req, res) => {
  const { ownerUserId } = req.params;

  //Prevent users from accessing data belonging to other users.
  if (ownerUserId !== req?.user?.userId) {
    return res.status(403).json({ message: "Forbidden access" });
  }

  const result = await financeServices.getAllSavings(ownerUserId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Delete single savings
const deleteSingleSavings = tryCatch(async (req, res) => {
  const { ownerUserId, savingsId } = req.params;
  const result = await financeServices.deleteSingleSavings(
    ownerUserId,
    savingsId,
    req.body
  );

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: [],
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

  //Prevent users from accessing data belonging to other users.
  if (ownerUserId !== req?.user?.userId) {
    return res.status(403).json({ message: "Forbidden access" });
  }
  
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
  const result = await financeServices.updateDebtPaidStatus(
    ownerUserId,
    debtId,
    req.body
  );
   if (result.success) {
     return SendSuccessResponse(res, {
       status: 200,
       message: result.message,
       data: [],
     });
   }
});

// Delete single Debt
const deleteSingleDebt = tryCatch(async (req, res) => {
  const { ownerUserId, debtId } = req.params;
  const result = await financeServices.deleteSingledebt(ownerUserId, debtId);
  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: [],
    });
  }
});

export const financeController = {
  addWallet,
  getAllWallet,
  deleteWallet,
  addNewExpense,
  getAllExpenses,
  deleteSingleExpense,
  getAllSavings,
  deleteSingleSavings,
  addNewDebt,
  getAllDebts,
  updateDebtPaidStatus,
  deleteSingleDebt,
};
