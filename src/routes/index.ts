import { Express } from "express";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";
import { productRoutes } from "./product.routes";

export const appRoutes = (app: Express) => {
  app.use("/login", loginRoutes());
  app.use("/users", userRoutes());
  app.use("/products",productRoutes())
};