import { Router } from "express";

/* ↓ products ↓  */
import getAllProducts from './product/getallproducts'
import postProduct from './product/postproduct'
import getOneProduct from './product/getoneproduct'
import deleteOneProduct from './product/deleteproduct'
import signUpUser from './user/createuser'
import loginUser from './user/loginuser'

/* ↓ admin ↓  */

import checkAdminStatus from './admin/checkadminstatus'
import getAllProductsAdmin from './product/getallproductsadmin'
import deleteProductsAdmin from './admin/deleteproductsadmin'
import getOneProductAdmin from './admin/getoneproductadmin'
import updateProduct from './admin/updateproductadmin'

/* ↓ middlewares ↓  */

import checkAdmin from "../controllers/middleware/checkadmin";



const router = Router()

router.use('/admin/products', checkAdmin, getAllProductsAdmin) // GET
router.use('/admin/products', checkAdmin, getOneProductAdmin) // GET
router.use('/admin/delete', checkAdmin, deleteProductsAdmin) // DELETE
router.use('/admin/products', checkAdmin, updateProduct) //PATCH

router.use('/admin/check', checkAdminStatus) //GET

router.use('/products', getAllProducts); // GET
router.use('/products', getOneProduct); // GET
router.use('/products', postProduct); // POST
router.use('/products', deleteOneProduct); // DELETE

router.use('/users/create', signUpUser) // POST
router.use('/users/', loginUser) // POST


export default router;