import { transporter } from "../../../config";
import { hashPassword } from "../../../utils/passwordHelper";
import { TRegister } from "../auth.interface";
import { User } from "../auth.model";

export const regiserUserService = async (payload: Omit<TRegister, "_id">) => {
  const { userEmail: ReceiverEmail, verified = false } = payload;

  // generate a 4 digit otp code
  const OTP = Math.floor(1000 + Math.random() * 9000);

  // Email options of node mailer to send otp to user
  const mailOptions = {
    from: '"Z-Bot" <your-email@gmail.com>',
    to: ReceiverEmail,
    subject: `Your OTP Code - ${OTP}`,
    text: `Your OTP code is - ${OTP}`,
  };

  // send this otp to user Email if email is not verified
  if (!verified) {
    try {
      await transporter.sendMail(mailOptions);
      return { payload, OTP };
    } catch (error) {
      throw new Error("Could not send OTP email.");
    }
  }

  const { verified: isVerified, ...userInfo } = payload;
  const { userName, userEmail, password } = userInfo;
  const hashedPassword = await hashPassword(password);

  const user = {
    userEmail,
    userName,
    password: hashedPassword,
  };

  try {
    const result = await User.create(user);
    if (result) {
      return user;
    }
  } catch (error) {
    throw new Error("Having problem to set user to the datbase");
  }
};
