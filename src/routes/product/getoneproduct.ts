import { Router, Request, Response } from "express";
import { getOneProduct } from "../../controllers/productcontrollers";


const router = Router()

router.get("/:id", async (req: Request, res: Response) => {
    
    const { id } = req.params
    const product = await getOneProduct(id)
    res.json(product)

});



export default router;