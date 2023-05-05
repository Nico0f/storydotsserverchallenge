import { Router } from "express";
import { deleteManyProducts } from "../../controllers/productcontrollers";

const router = Router()

router.delete("/", async (req, res) => {
    
    const { products} = req.body
    const productsParsed = products.map((element: string) => Number(element))
    const deletedProducts = await deleteManyProducts(productsParsed)
    res.json(deletedProducts)

});



export default router;