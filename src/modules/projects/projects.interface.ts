import { Schema } from "mongoose";

export type TProject={
    _id:Schema.Types.ObjectId;
    projectName:string;
    projectDescription:string;
    projectOwnerId:string;
}

export type TFeature={
    _id:string;
    featureName:string;
    projectId:string;
}