import { addNewExpense } from "./addExpense";
import { addNewDebt } from "./addNewDebt";
import { addWallet } from "./addWallet";
import { deleteSingledebt } from "./deleteSingleDebt";
import { deleteSingleExpense } from "./deleteSingleExpense";
import { deleteSingleSavings } from "./deleteSingleSavings";
import { getAllDebts } from "./getAllDebts";
import { getAllExpense } from "./getAllExpense";
import { getAllSavings } from "./getAllSavings";
import { getAllWallet } from "./getAllWallet";
import { updateDebtPaidStatus } from "./updateDebtPaidStatus";

export const financeServices = {
  addWallet,
  getAllWallet,
  addNewExpense,
  getAllExpense,
  deleteSingleExpense,
  getAllSavings,
  deleteSingleSavings,
  addNewDebt,
  getAllDebts,
  updateDebtPaidStatus,
  deleteSingledebt
};