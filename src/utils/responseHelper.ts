import { response, Response } from "express";

type TSuccess = { status: number; message: string; data: any };

export const SendSuccessResponse = (
  res: Response,
  { status, message, data }: TSuccess
) => {
  res.status(status).json({ success: true, message, data });
};
