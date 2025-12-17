import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attaches user info to the request
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (req.user.role !== role) {
            return res.status(403).json({
                message: "Forbidden, only for admin access",
            });
        }

        next();
    };
};
