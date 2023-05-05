"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* ↓ products ↓  */
const getallproducts_1 = __importDefault(require("./product/getallproducts"));
const postproduct_1 = __importDefault(require("./product/postproduct"));
const getoneproduct_1 = __importDefault(require("./product/getoneproduct"));
const deleteproduct_1 = __importDefault(require("./product/deleteproduct"));
const createuser_1 = __importDefault(require("./user/createuser"));
const loginuser_1 = __importDefault(require("./user/loginuser"));
/* ↓ admin ↓  */
const getallproductsadmin_1 = __importDefault(require("./product/getallproductsadmin"));
const deleteproductsadmin_1 = __importDefault(require("./admin/deleteproductsadmin"));
const getoneproductadmin_1 = __importDefault(require("./admin/getoneproductadmin"));
const router = (0, express_1.Router)();
router.use('/admin/products', getallproductsadmin_1.default); // GET
router.use('/admin/products', getoneproductadmin_1.default); // GET
router.use('/admin/delete', deleteproductsadmin_1.default); // DELETE
router.use('/products', getallproducts_1.default); // GET
router.use('/products', getoneproduct_1.default); // GET
router.use('/products', postproduct_1.default); // POST
router.use('/products', deleteproduct_1.default); // DELETE
router.use('/users/create', createuser_1.default); // POST
router.use('/users/', loginuser_1.default); // POST
exports.default = router;
//# sourceMappingURL=index.js.map