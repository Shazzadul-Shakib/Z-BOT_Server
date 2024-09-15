import { Feature } from "../projects.model";

export const getAllFeatures = async (projectId: string) => {
  const result = await Feature.find({ projectId });

  if (result.length === 0) {
    return { success: true, message: "No feature for this project", result };
  }

  return {
    success: true,
    message: "Got all features for the project",
    result,
  };
};
