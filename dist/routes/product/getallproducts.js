"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const { limit, offset, category, style, order } = req.query;
    const products = await (0, productcontrollers_1.getAllProducts)(Number(limit), Number(offset), String(category), String(style), String(order));
    const responseheader = {
        'limit': limit,
        'offset': offset,
        'count': products.count
    };
    res.set(responseheader);
    res.json(products.content);
});
exports.default = router;
//# sourceMappingURL=getallproducts.js.map