import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";

dotenv.config({path:path.join(process.cwd(),".env")});

export const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
};

// Node mailer config
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SenderEmail,
    pass: process.env.SenderEmailPassword,
  },
});