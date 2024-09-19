import { Savings } from "../finance.model";

export const getAllSavings = async (ownerUserId: string) => {
  const result = await Savings.find({ ownerUserId });
  return {
    success: true,
    message: "All savings record retrived successfully",
    result,
  };
};
