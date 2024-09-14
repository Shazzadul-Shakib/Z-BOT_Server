import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Define an interface for the expected payload with userId
interface CustomJwtPayload extends JwtPayload {
  userId: string;
}

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.access_token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );

    // Check if decodedToken is an object and contains userId
    if (typeof decodedToken === "object" && "userId" in decodedToken) {
      req.user = { userId: (decodedToken as CustomJwtPayload).userId };
      next();
    } else {
      res.status(403).json({ message: "Forbidden access" });
    }
  } catch (err) {
    res.status(403).json({ message: "Forbidden access" });
  }
};

export default verifyToken;
