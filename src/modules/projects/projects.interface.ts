import { Schema } from "mongoose";

export type TProject={
    _id:Schema.Types.ObjectId;
    projectName:string;
    projectDescription:string;
    projectOwnerId:string;
}

export type TFeature={
    _id:Schema.Types.ObjectId;
    featureName:string;
    projectId:string;
}

export type TTask={
    _id:Schema.Types.ObjectId;
    task:string;
    featureId:string;
    projectId:string;
    completed:boolean
}
export type TaskPayload = Pick<{ completed: boolean }, "completed">;