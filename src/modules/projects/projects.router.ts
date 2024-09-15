import { Router } from "express";
import { projectController } from "./projects.controller";
import verifyToken from "../../middlewares/verifyToken";

export const projectRouter=Router();

projectRouter.post("/",projectController.addProject);
projectRouter.get("/:projectOwnerId",verifyToken,projectController.getProjects);
projectRouter.post("/features",projectController.addNewFeature);
projectRouter.get("/features/:projectId",projectController.getAllFeatures);
projectRouter.post("/features/tasks",projectController.addNewTask);
projectRouter.get("/features/tasks/:projectId/:featureId",projectController.getAllTasks);
projectRouter.patch("/features/tasks/:projectId/:featureId/:taskId",projectController.updateStateCompletionTask);