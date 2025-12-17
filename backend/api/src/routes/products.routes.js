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
    },
    {
        path: "/products/:id",
        method: "delete",
        handler: deleteProduct,
    },
    {
        path: "/products/:id",
        method: "get",
        handler: getProductById,
    },
    {
        path: "/products/:id",
        method: "put",
        handler: updateProduct,
    },
    {
        path: "/products",
        method: "post",
        handler: createProduct,
    },
];
