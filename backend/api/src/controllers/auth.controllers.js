import dotenv from "dotenv";
dotenv.config();
import { users } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SIGNUP
export const signup = async (req, res) => {
    const { email, password } = req.body;

    // check if user exists
    const exists = users.find((u) => u.email === email);
    if (exists) return res.status(400).json({ message: "User already exists" });

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        email,
        password: hashed,
    };

    users.push(newUser);

    res.status(201).json({ id: newUser.id, email: newUser.email });
};

// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

    // create jwt
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    res.json({ message: "Login successful", token });
};
