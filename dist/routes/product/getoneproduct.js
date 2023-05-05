"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productcontrollers_1 = require("../../controllers/productcontrollers");
// import  getAllWines  from '../../controllers/GetAllWines';
// import filterAllWines from "../../controllers/FilterAllWines"
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await (0, productcontrollers_1.getOneProduct)(id);
    res.json(product);
});
exports.default = router;
//# sourceMappingURL=getoneproduct.js.map