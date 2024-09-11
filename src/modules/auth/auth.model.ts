import { model, Schema } from "mongoose";
import { TRegister } from "./auth.interface";

const UserSchema = new Schema<TRegister>({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model("user", UserSchema);
