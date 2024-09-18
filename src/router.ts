import { Router } from "express";
import { authRouter } from "./modules/auth/auth.router";
import { projectRouter } from "./modules/projects/projects.router";
import { financeRouter } from "./modules/finance/finance.router";


export const appRouter=Router();

appRouter.use("/user", authRouter);
appRouter.use("/projects", projectRouter);
appRouter.use("/finance", financeRouter);