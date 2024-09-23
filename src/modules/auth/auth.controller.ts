import { SendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { authServices } from "./services";

// Register user
const registerUser = tryCatch(async (req, res) => {
  const result = await authServices.regiserUserService(req.body);

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
});

// Login user
const loginUser = tryCatch(async (req, res) => {
  const result = await authServices.loginUserService(req.body);

  if (result.success) {
    res.cookie("access_token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return SendSuccessResponse(res, {
      status: 200,
      message: result.message,
      data: result.loggedUser,
    });
  }

  return res.status(400).send({ message: result.message });
});

// Logout user and clear cookie
const logoutUser = tryCatch(async (_, res) => {
  res.clearCookie("access_token");
  return SendSuccessResponse(res, {
    status: 200,
    message: "User Logout successful!",
    data: {},
  });
});

export const authController = {
  registerUser,
  loginUser,
  logoutUser,
};
