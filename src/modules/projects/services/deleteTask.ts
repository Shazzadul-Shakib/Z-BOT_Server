import { Task } from "../projects.model";

export const deleteTask = async (
  projectId: string,
  featureId: string,
  taskId: string
) => {
  await Task.findOneAndDelete({ projectId, featureId, _id: taskId });

  return { success: true, message: "Task deleted successfully" };
};
