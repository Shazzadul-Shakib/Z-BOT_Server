import { comparePassword } from "../../../utils/passwordHelper";
import { TRegister } from "../auth.interface";
import { User } from "../auth.model";

export const loginUserService = async (
  payload:TRegister
) => {
  const { userEmail, password } = payload;

  // Find user in the collection
  const user = await User.findOne({ userEmail });

//   if there is no user
  if (!user) {
    return { message: "User not found", success: false };
  }

//   extract user info
  const { password: hashedPassword, ...loggedUser } = user.toObject();

  // Compare password
  const isMatch = await comparePassword(password, hashedPassword);
  
// if not match return false
  if (!isMatch) {
    return { message: "Invalid password", success: false };
  }
 
  // If match, return success
  return { message: "Login successful", success: true, loggedUser };
};
