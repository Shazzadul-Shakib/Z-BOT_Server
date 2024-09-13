import { Router } from "express";
import { authRouter } from "./modules/auth/auth.router";
import { projectRouter } from "./modules/projects/projects.router";


export const appRouter=Router();

appRouter.use("/user", authRouter);
appRouter.use("/projects", projectRouter);