import { Router } from "express";
import { financeController } from "./finance.controller";

export const financeRouter=Router();

financeRouter.post("/wallets",financeController.addWallet);
financeRouter.get("/wallets/:walletOwnerId", financeController.getAllWallet);
financeRouter.post("/expenses/:ownerUserId", financeController.addNewExpense);