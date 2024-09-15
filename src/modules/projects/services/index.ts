import { addNewFeature } from "./addNewFeature";
import { addProjectService } from "./addProject";
import { addNewTask } from "./addTask";
import { getAllFeatures } from "./getAllFeatures";
import { getAllProjects } from "./getProjects";

export const projectService = {
  addProjectService,
  getAllProjects,
  addNewFeature,
  getAllFeatures,
  addNewTask
};