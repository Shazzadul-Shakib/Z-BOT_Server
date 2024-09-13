import { Schema } from "mongoose";

export type TProject={
    _id:Schema.Types.ObjectId;
    projectName:string;
    projectDescription:string;
    projectOwner:string;
}