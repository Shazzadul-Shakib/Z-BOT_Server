import { Router } from "express";
import { financeController } from "./finance.controller";
import verifyToken from "../../middlewares/verifyToken";

export const financeRouter = Router();

financeRouter.post("/wallets", financeController.addWallet);
financeRouter.get("/wallets/:walletOwnerId", verifyToken , financeController.getAllWallet);
financeRouter.delete("/wallets/:walletOwnerId/:walletId",financeController.deleteWallet);

financeRouter.post("/expenses/:ownerUserId", financeController.addNewExpense);
financeRouter.get("/expenses/:ownerUserId", verifyToken , financeController.getAllExpenses);
financeRouter.delete(
  "/expenses/:ownerUserId/:expenseId",
  financeController.deleteSingleExpense
);
financeRouter.get("/savings/:ownerUserId", verifyToken , financeController.getAllSavings);
financeRouter.delete(
  "/savings/:ownerUserId/:savingsId",
  financeController.deleteSingleSavings
);
financeRouter.post("/debts/:ownerUserId", financeController.addNewDebt);
financeRouter.get("/debts/:ownerUserId", verifyToken , financeController.getAllDebts);
financeRouter.patch(
  "/debts/:ownerUserId/:debtId",
  financeController.updateDebtPaidStatus
);
financeRouter.delete(
  "/debts/:ownerUserId/:debtId",
  financeController.deleteSingleDebt
);
