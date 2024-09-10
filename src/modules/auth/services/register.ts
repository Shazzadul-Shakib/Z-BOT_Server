import { transporter } from "../../../config";
import { TRegister } from "../auth.interface";

export const regiserUserService = async (payload: Omit<TRegister, "_id">) => {
  // console.log(payload);
  const { userEmail, verified = false } = payload;

  // generate a 4 digit otp code
  const OTP = Math.floor(1000 + Math.random() * 9000);

  // Email options
  const mailOptions = {
    from: '"Z-Bot" <your-email@gmail.com>',
    to: userEmail,
    subject: "Your OTP Code",
    text: `Your OTP code is - ${OTP}`,
  };

  // send this otp to user Email
  if (!verified) {
    try {
      await transporter.sendMail(mailOptions);
      console.log("OTP email sent successfully!");
      return { payload, OTP };
    } catch (error) {
      throw new Error("Could not send OTP email.");
    }
  }
  console.log("matched", payload);
  return true;
};
