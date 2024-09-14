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

export const projectController = {
  addProject,
  getProjects,
};
