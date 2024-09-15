import { TFeature } from "../projects.interface";
import { Feature } from "../projects.model";

export const addNewFeature = async (payload: TFeature) => {
  const result = await Feature.create(payload);
  return { success: true, message: "New feature added successfully", result };
};
