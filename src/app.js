import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", carritoRoutes);

export default app;