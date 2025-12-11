import { getUsers, getUsersById } from "../controllers/users.controllers.js";

const userRoutes = [
    {
        path: "/users",
        method: "get",
        handler: getUsers,
    },
    {
        path: "/users/:id",
        method: "get",
        handler: getUsersById,
    },
];

export default userRoutes;
