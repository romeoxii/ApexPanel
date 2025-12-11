import { products } from "../models/products.js";

export const getAllProducts = (req, res) => {
    res.json(products);
};

export const createProduct = (req, res) => {
    const { name, price, category, stock } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
        stock,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
};

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ message: "product not found" });
    }

    const updatedData = req.body;

    const updatedProduct = {
        ...products[index], // old data
        ...updatedData, // new data overwrite old
    };

    products[index] = updatedProduct;

    res.json(updatedProduct);
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);
    res.status(201).json({ message: "Product deleted" });
};
