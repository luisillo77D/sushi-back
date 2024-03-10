import jwt from "jsonwebtoken";
import { secret } from "../config.js";
export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "no token auth" });

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token " });

    req.user=user
    next();
  });
};