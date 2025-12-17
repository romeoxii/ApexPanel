import { users } from "../models/users.js";

export const getUsers = (req, res) => {
    res.json(users);
};

export const getUsersById = (req, res) => {
    const { id } = req.params;

    const userExists = users.find((u) => u.id === Number(id));

    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(userExists);
};
