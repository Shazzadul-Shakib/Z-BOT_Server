import express from "express";
import cors from "cors";

export const app = express();

// ---- parser ---- //
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);


// ---- server in web ---- //
app.get("/",(_,res)=>{
    res.status(200).json({message:"Z-BOT Server is running..."});
})