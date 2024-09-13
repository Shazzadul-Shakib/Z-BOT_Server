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

export const projectController = {
  addProject,
};
