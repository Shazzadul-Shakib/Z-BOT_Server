import {TRegister} from "../auth.interface"

export const regiserUserService=async(payload:Omit<TRegister, "_id">)=>{
    console.log(payload);
    return {payload};
}