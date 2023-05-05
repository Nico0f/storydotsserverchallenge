import { Router } from "express";
import { getOneProductAdmin } from "../../controllers/productcontrollers";

const router = Router()

router.get("/:id", async (req, res) => {
    
    const { id } = req.params
    const product = await getOneProductAdmin(id)
    res.json(product)

});



export default router;