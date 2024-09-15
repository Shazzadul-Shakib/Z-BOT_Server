import { TaskPayload } from "../projects.interface";
import { Task } from "../projects.model";

export const updateStateCompletionTask = async (
  payload: TaskPayload,
  projectId: string,
  featureId: string,
  TaskId: string
) => {
  const {completed}=payload;
  const result = await Task.findOneAndUpdate(
    {
      projectId,
      featureId,
      _id: TaskId,
    },
    {
      $set: {
        completed: completed,
      },
    },
    {
      new: true,
    }
  );
  return {
    success: true,
    message: "State changed of task completion successfully",
    result,
  };
};
