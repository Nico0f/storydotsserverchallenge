"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* ↓ products ↓  */
const getallproducts_1 = __importDefault(require("./product/getallproducts"));
const getoneproduct_1 = __importDefault(require("./product/getoneproduct"));
const deleteproduct_1 = __importDefault(require("./product/deleteproduct"));
const createuser_1 = __importDefault(require("./user/createuser"));
const loginuser_1 = __importDefault(require("./user/loginuser"));
/* ↓ admin ↓  */
const checkadminstatus_1 = __importDefault(require("./admin/checkadminstatus"));
const getallproductsadmin_1 = __importDefault(require("./admin/getallproductsadmin"));
const deleteproductsadmin_1 = __importDefault(require("./admin/deleteproductsadmin"));
const getoneproductadmin_1 = __importDefault(require("./admin/getoneproductadmin"));
const updateproductadmin_1 = __importDefault(require("./admin/updateproductadmin"));
const createproductadmin_1 = __importDefault(require("./admin/createproductadmin"));
/* ↓ middlewares ↓  */
const checkadmin_1 = __importDefault(require("../controllers/middleware/checkadmin"));
const router = (0, express_1.Router)();
router.use('/admin/products', checkadmin_1.default, getallproductsadmin_1.default); // GET
router.use('/admin/products', checkadmin_1.default, getoneproductadmin_1.default); // GET
router.use('/admin/delete', checkadmin_1.default, deleteproductsadmin_1.default); // DELETE
router.use('/admin/products', checkadmin_1.default, updateproductadmin_1.default); //PATCH
router.use('/admin/products', checkadmin_1.default, createproductadmin_1.default); //POST
router.use('/admin/check', checkadminstatus_1.default); //GET
router.use('/products', getallproducts_1.default); // GET
router.use('/products', getoneproduct_1.default); // GET
router.use('/products', deleteproduct_1.default); // DELETE
router.use('/users/create', createuser_1.default); // POST
router.use('/users/', loginuser_1.default); // POST
exports.default = router;
//# sourceMappingURL=index.js.map