"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const { name, description, price, published, image_url, category, brand, style } = req.body;
    const product = await (0, productcontrollers_1.CreateProductAdmin)(name, description, price, published, image_url, category, brand, style);
    res.json(product);
});
exports.default = router;
//# sourceMappingURL=createproductadmin.js.map