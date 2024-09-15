import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { projectService } from "./services";

const addProject = tryCatch(async (req, res) => {
  const result = await projectService.addProjectService(req.body);
  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// get all projects for individual users
const getProjects = tryCatch(async (req, res) => {
  const projectOwnerId = req.params.projectOwnerId as string;

  //Prevent users from accessing data belonging to other users.
  if (projectOwnerId !== req?.user?.userId) {
    return res.status(403).json({ message: "Forbidden access" });
  }

  const result = await projectService.getAllProjects(projectOwnerId);
  if (result) {
    res.send(result);
  }
});

// add new feature to the project
const addNewFeature = tryCatch(async (req, res) => {
  const result = await projectService.addNewFeature(req.body);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// get all features to the project
const getAllFeatures = tryCatch(async (req, res) => {
  const result = await projectService.getAllFeatures(req.params.projectId);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Add new task to the feature of the project
const addNewTask = tryCatch(async (req, res) => {
  const result = await projectService.addNewTask(req.body);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Get all tasks for the feature of the project
const getAllTasks = tryCatch(async (req, res) => {
  const result = await projectService.getAllTasks(
    req.params.projectId,
    req.params.featureId
  );
  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.result,
    });
  }
});

// Update state of completion of the task
const updateStateCompletionTask = tryCatch(async (req, res) => {
  const { projectId, featureId, taskId } = req.params;
  const result = await projectService.updateStateCompletionTask(
    req.body,
    projectId,
    featureId,
    taskId
  );
  if(result){
    return res.send("ok");
  }
});

export const projectController = {
  addProject,
  getProjects,
  addNewFeature,
  getAllFeatures,
  addNewTask,
  getAllTasks,
  updateStateCompletionTask,
};
