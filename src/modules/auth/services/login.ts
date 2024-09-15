import { config } from "../../../config";
import { comparePassword } from "../../../utils/passwordHelper";
import { TRegister } from "../auth.interface";
import { User } from "../auth.model";
import jwt from "jsonwebtoken";

export const loginUserService = async (payload: TRegister) => {
  const { userEmail, password } = payload;

  // Find user in the collection
  const user = await User.findOne({ userEmail });

  //   if there is no user
  if (!user) {
    return { message: "User not found", success: false };
  }

  //   extract user info
  const { password: hashedPassword, ...loggedUser } = user.toObject();
  const { _id } = loggedUser;
  const userId = _id.toString();

  // Compare password
  const isMatch = await comparePassword(password, hashedPassword);

  // if not match return false
  if (!isMatch) {
    return { message: "Invalid password", success: false };
  }
  const secret = config.accessTokenSecret;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }
  // create jwt token
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "30d",
  });

  // If match, return success
  return { message: "Login successful", success: true, loggedUser, token };
};
