import { addNewExpense } from "./addExpense";
import { addNewDebt } from "./addNewDebt";
import { addWallet } from "./addWallet";
import { getAllDebts } from "./getAllDebts";
import { getAllExpense } from "./getAllExpense";
import { getAllSavings } from "./getAllSavings";
import { getAllWallet } from "./getAllWallet";

export const financeServices={
    addWallet,
    getAllWallet,
    addNewExpense,
    getAllExpense,
    getAllSavings,
    addNewDebt,
    getAllDebts
}