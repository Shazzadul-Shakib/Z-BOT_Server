import moment from "moment";
import { Expense } from "../finance.model";
import { ExpensePayload } from "../finance.interface";

export const getAllExpense = async (ownerUserId: string, month?: number) => {
  // If month and year are not provided, default to the current month and year
  const currentYear = moment().year();
  const currentMonth = moment().month() + 1; // moment()'s month() is 0-based, so we add 1

  const targetYear = currentYear;
  const targetMonth = month || currentMonth;

  // Get the start and end of the target month and year
  const startOfMonth = moment()
    .year(targetYear)
    .month(targetMonth - 1)
    .startOf("month"); // month is 0-based
  const endOfMonth = moment()
    .year(targetYear)
    .month(targetMonth - 1)
    .endOf("month");

  // Retrieve all expenses for the given user
  const allExpenses = await Expense.find({ ownerUserId });

  // Filter expenses to only include those within the target month and year
  const result = allExpenses.filter((expense) => {
    const expenseDate = moment(expense.expenseDate, "DD/MM/YYYY"); // Convert the string to a moment date object
    return expenseDate.isBetween(startOfMonth, endOfMonth, "day", "[]");
  });
  return {
    success: true,
    message: `Expenses for ${month}/${targetYear} retrieved successfully`,
    result,
  };
};
