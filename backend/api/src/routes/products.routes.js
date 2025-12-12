import {
    getAllProducts,
    deleteProduct,
    createProduct,
    getProductById,
    updateProduct,
} from "../controllers/products.controllers.js";

export const routes = [
    {
        path: "/products",
        method: "get",
        handler: getAllProducts,
        protected: true,
    },
    {
        path: "/products/:id",
        method: "delete",
        handler: deleteProduct,
        protected: true,
    },
    {
        path: "/products/:id",
        method: "get",
        handler: getProductById,
        protected: true,
    },
    {
        path: "/products/:id",
        method: "put",
        handler: updateProduct,
        protected: true,
    },
    {
        path: "/products",
        method: "post",
        handler: createProduct,
        protected: true,
    },
];
