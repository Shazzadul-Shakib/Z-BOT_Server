import { addNewFeature } from "./addNewFeature";
import { addProjectService } from "./addProject";
import { addNewTask } from "./addTask";
import { deleteTask } from "./deleteTask";
import { getAllFeatures } from "./getAllFeatures";
import { getAllTasks } from "./getAllTasks";
import { getAllProjects } from "./getProjects";
import { updateStateCompletionTask } from "./updateStateCompletionTask";

export const projectService = {
  addProjectService,
  getAllProjects,
  addNewFeature,
  getAllFeatures,
  addNewTask,
  getAllTasks,
  updateStateCompletionTask,
  deleteTask,
};