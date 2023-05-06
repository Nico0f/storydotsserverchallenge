"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../prisma"));
const router = (0, express_1.Router)();
router.patch("/", async (req, res) => {
    await prisma_1.default.product.updateMany({
        data: {
            description: "The perfect addition to your wardrobe! Our product is made with the highest quality materials, ensuring maximum comfort and durability. Whether you're going for a casual look or dressing up for a special occasion, our product is versatile and stylish, perfect for any occasion."
        }
    });
    res.send('lalala');
});
exports.default = router;
//# sourceMappingURL=updateproduct.js.map