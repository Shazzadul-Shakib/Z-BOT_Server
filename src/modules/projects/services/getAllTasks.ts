import { Task } from "../projects.model";

export const getAllTasks = async (projectId: string, featureId: string) => {
  const result = await Task.find({ projectId,featureId});
  
  return {
    success: true,
    message: "All tasks for the feature retrived successfully",
    result,
  };
};
