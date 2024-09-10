import { transporter } from "../../../config";
import {TRegister} from "../auth.interface"

export const regiserUserService=async(payload:Omit<TRegister, "_id">)=>{
  console.log(payload);
  const { userEmail } = payload;

  // generate a 4 digit otp code
  const OTP = Math.floor(1000 + Math.random() * 9000);
  console.log(OTP)

  // Email options
  const mailOptions = {
    from: '"Z-Bot" <your-email@gmail.com>',
    to: userEmail,
    subject: "Your OTP Code",
    text: `Your OTP code is - ${OTP}`, 
  };

  // send this otp to user Email
  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP email sent successfully!");
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Could not send OTP email.");
  }

  return { payload,OTP };
}