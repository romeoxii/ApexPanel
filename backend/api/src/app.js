import express from "express";
import cors from "cors";
import routes from "./routes/products.routes.js";
import userRoutes from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

// regular routes
routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

// users routes
userRoutes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

// auth routes
app.use("/auth", authRouter);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
