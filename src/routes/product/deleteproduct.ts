import { Router, Request, Response } from "express";
import { deleteOneProduct } from "../../controllers/productcontrollers";

const router = Router()

router.delete("/:id", async (req: Request, res: Response) => {
    
    const { id } = req.params
    const product = await deleteOneProduct(id)
    res.json(product)

});



export default router;