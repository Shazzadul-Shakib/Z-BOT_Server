import { model, Schema } from "mongoose";
import { TFeature, TProject } from "./projects.interface";

// Project Schema
const ProjectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectOwnerId: { type: String, ref: "user", required: true },
});

export const Project = model("projects", ProjectSchema);

// Feature Schema
const FeatureSchema = new Schema<TFeature>({
  featureName: { type: String, required: true },
  projectId: { type: String, required: true },
});

export const Feature = model("features", FeatureSchema);
