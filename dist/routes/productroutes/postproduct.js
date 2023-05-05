"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    // const products = await getAllProducts()
    // res.json(products)
    res.send('lalala');
});
exports.default = router;
//# sourceMappingURL=postproduct.js.map