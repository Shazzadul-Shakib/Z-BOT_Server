import { TTask } from "../projects.interface";
import { Task } from "../projects.model";

export const addNewTask = async (payload: Omit<TTask, "_id">) => {
  const result = await Task.create(payload);
  return { success: true, message: "New task added successfully", result };
};
