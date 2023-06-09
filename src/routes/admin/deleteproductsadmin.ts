import { Router, Request, Response } from "express";
import { deleteManyProducts } from "../../controllers/productcontrollers";

const router = Router()

router.delete("/", async (req: Request, res: Response) => {
    
    const { products} = req.body
    const productsParsed = products.map((element: string) => Number(element))
    const deletedProducts = await deleteManyProducts(productsParsed)
    res.json(deletedProducts)

});



export default router;