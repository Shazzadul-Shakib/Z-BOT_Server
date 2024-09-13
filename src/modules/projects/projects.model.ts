import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const ProjectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectOwnerId: { type: String, ref: "user", required: true },
});

export const Project=model("projects",ProjectSchema);