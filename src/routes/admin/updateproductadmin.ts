import { Router } from "express";
import { UpdateProduct } from "../../controllers/productcontrollers";

const router = Router()

router.patch("/:id", async (req, res) => {
    
    const { id } = req.params
    const { name, published, description, image_url, price } = req.body
    const product = await UpdateProduct(id, name, published, description, image_url, price)
    res.json(product)

});



export default router;