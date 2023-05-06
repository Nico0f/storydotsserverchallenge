"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
const router = (0, express_1.Router)();
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, published, description, image_url, price } = req.body;
    const product = await (0, productcontrollers_1.UpdateProduct)(id, name, published, description, image_url, price);
    res.json(product);
});
exports.default = router;
//# sourceMappingURL=updateproductadmin.js.map