import { Router } from "express";
import { deleteOneProduct } from "../../controllers/productcontrollers";

const router = Router()

router.delete("/:id", async (req, res) => {
    
    const { id } = req.params
    const product = await deleteOneProduct(id)
    res.json(product)

});



export default router;