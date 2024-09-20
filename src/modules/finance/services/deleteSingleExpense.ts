import { Expense } from "../finance.model";

export const deleteSingleExpense = async (
  ownerUserId: string,
  expenseId: string
) => {

    const result = await Expense.findOneAndDelete({ownerUserId,_id:expenseId});

    return {success:true,message:"Expense deleted successfully"}
};
