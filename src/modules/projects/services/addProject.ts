import { TProject } from "../projects.interface";
import { Project } from "../projects.model";

export const addProjectService = async (payload: Omit<TProject, "_id">) => {
  const result = await Project.create(payload);

  return { success: true, message: "Project added to database", result };
};
