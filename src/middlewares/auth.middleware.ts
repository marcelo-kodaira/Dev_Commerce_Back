import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request,res: Response,next: NextFunction) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "Providencie um token." });
  }

  const [_, token] = auth.split(" ");

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Token inválido." });
      }

      req.user = {
        id: decoded.id,
      };

      next();
    }
  );
};

