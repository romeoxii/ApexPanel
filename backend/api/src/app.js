import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import { users } from "./models/users.js";
import { routes } from "./routes/products.routes.js";
import userRoutes from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import { requireAuth, requireRole } from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());

app.use(cors());

// regular routes
app.use("/api", (req, res, next) => {
    routes.forEach((route) => {
        if (route.protected) {
            app[route.method](route.path, requireAuth, route.handler);
        } else {
            app[route.method](route.path, route.handler);
        }
    });
    next();
});

// users routes
userRoutes.forEach((route) => {
    if (route.protected) {
        app[route.method](
            route.path,
            requireAuth,
            requireRole("admin"),
            route.handler
        );
    } else {
        app[route.method](route.path, route.handler);
    }
});

// auth routes
app.use("/auth", authRouter);

const seedAdmin = async () => {
    const adminExists = users.some((u) => u.role === "admin");

    if (!adminExists) {
        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            10
        );

        users.push({
            id: users.length + 1,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: "admin",
        });

        console.log("admin created");
    }
};

await seedAdmin();

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
