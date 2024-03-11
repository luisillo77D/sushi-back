import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);

export default app;