"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../controllers/productcontrollers");
// import  getAllWines  from '../../controllers/GetAllWines';
// import filterAllWines from "../../controllers/FilterAllWines"
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const products = await (0, productcontrollers_1.getAllProducts)();
    res.json(products);
});
router.post("/", async (req, res) => {
    // const products = await getAllProducts()
    // res.json(products)
    res.send('lalala');
});
exports.default = router;
//# sourceMappingURL=productroutes.js.map