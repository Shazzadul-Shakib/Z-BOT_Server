import { Router } from "express";
import { projectController } from "./projects.controller";

export const projectRouter=Router();

projectRouter.post("/",projectController.addProject);