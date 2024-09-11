import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { authServices } from "./services";

const registerUser=tryCatch(async(req,res)=>{
    const result = await authServices.regiserUserService(req.body);

    if(result){
        console.log(result);
         if (result && typeof result === "object") {
           if ("OTP" in result) {
             // Send success response with OTP
             SendSuccessResponse(res, {
               status: 200,
               message: "OTP sent successfully",
               data: result,
             });
           } else {
             // Send response when user is verified
             SendSuccessResponse(res, {
               status: 200,
               message: "User registered succesfully!",
               data:""
             });
           }
         } 
        
    }

})

export const authController={
    registerUser
}