import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.access_token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ message: "Forbidden access" });
  }
};

export default verifyToken;
