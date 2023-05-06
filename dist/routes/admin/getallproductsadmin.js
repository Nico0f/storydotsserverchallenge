"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const { limit, offset, category, style } = req.query;
    const products = await (0, productcontrollers_1.getAllProductsAdmin)(Number(limit), Number(offset), String(category), String(style));
    res.json({
        products: products.content,
        count: products.count
    });
});
exports.default = router;
//# sourceMappingURL=getallproductsadmin.js.map