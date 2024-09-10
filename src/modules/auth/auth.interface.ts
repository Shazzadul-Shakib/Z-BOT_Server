import { Schema } from "mongoose";

export type TRegister={
    _id:Schema.Types.ObjectId;
    userName:string;
    userEmail:string;
    userPassword:string;
    verified?:boolean;
}