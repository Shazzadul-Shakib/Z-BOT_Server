import { tryCatch } from "../../utils/tryCatch";
import { authServices } from "./services";

const registerUser=tryCatch(async(req,res)=>{
    const result = await authServices.regiserUserService(req.body);

    if(result){
        res.send(result);
    }

})

export const authController={
    registerUser
}