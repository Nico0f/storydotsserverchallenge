"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
const router = (0, express_1.Router)();
router.delete("/", async (req, res) => {
    const { products } = req.body;
    const productsParsed = products.map((element) => Number(element));
    const deletedProducts = await (0, productcontrollers_1.deleteManyProducts)(productsParsed);
    res.json(deletedProducts);
});
exports.default = router;
//# sourceMappingURL=deleteproductsadmin.js.map