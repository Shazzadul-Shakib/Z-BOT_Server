import express from "express";
import cors from "cors";
import { appRouter } from "./router";
import cookieParser from "cookie-parser";

export const app = express();

// ---- parser ---- //
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://z-bot-client.vercel.app"],
    credentials: true,
  })
);

// ----- Routers ----- //
app.use("/api/v1", appRouter);


// ---- server in web ---- //
app.get("/",(_,res)=>{
    res.status(200).json({message:"Z-BOT Server is running..."});
})