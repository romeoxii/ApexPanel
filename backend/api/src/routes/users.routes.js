import { getUsers, getUsersById } from "../controllers/users.controllers.js";

const userRoutes = [
    {
        path: "/users",
        method: "get",
        handler: getUsers,
        protected: true,
    },
    {
        path: "/users/:id",
        method: "get",
        handler: getUsersById,
        protected: true,
    },
];

export default userRoutes;
