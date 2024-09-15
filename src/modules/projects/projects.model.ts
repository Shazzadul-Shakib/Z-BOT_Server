import { model, Schema } from "mongoose";
import { TFeature, TProject, TTask } from "./projects.interface";

// Project Schema
const ProjectSchema = new Schema<TProject>(
  {
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectOwnerId: { type: String, ref: "user", required: true },
  },
  { timestamps: true }
);

export const Project = model("projects", ProjectSchema);

// Feature Schema
const FeatureSchema = new Schema<TFeature>(
  {
    featureName: { type: String, required: true },
    projectId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feature = model("features", FeatureSchema);

// Task Schema
const TaskSchema = new Schema<TTask>({
  task: { type: String, required: true },
  featureId: { type: String, required: true },
  projectId: { type: String, required: true },
  completed: { type: Boolean, required: true },
},{ timestamps: true });

export const Task = model("tasks", TaskSchema);
