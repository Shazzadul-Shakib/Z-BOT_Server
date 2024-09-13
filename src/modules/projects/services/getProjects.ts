import { Project } from "../projects.model";

export const getAllProjects = async (projectOwnerId: string) => {
  const result = await Project.find({ projectOwnerId });
  return result;
};
