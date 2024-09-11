import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { authServices } from "./services";

// Register user
const registerUser = tryCatch(async (req, res) => {
  const result = await authServices.regiserUserService(req.body);

  if (result) {
    if (result && typeof result === "object") {
      if ("OTP" in result) {
        // Send success response with OTP
        return SendSuccessResponse(res, {
          status: 200,
          message: "OTP sent successfully",
          data: result,
        });
      } else {
        // Send response when user is verified
        return SendSuccessResponse(res, {
          status: 200,
          message: "User registered succesfully!",
          data: "",
        });
      }
    }
  }
});

// Login user
const loginUser = tryCatch(async (req, res) => {
  const result = await authServices.loginUserService(req.body);

  if (result.success) {
    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.loggedUser,
    });
  }

  return res.status(400).send({ message: result.message });
});

export const authController = {
  registerUser,
  loginUser,
};
