import { Router } from "express";
import { financeController } from "./finance.controller";

export const financeRouter=Router();

financeRouter.post("/",financeController.addWallet);