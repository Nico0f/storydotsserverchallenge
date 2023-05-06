import { Router, Request, Response } from "express";
import { CreateProductAdmin } from "../../controllers/productcontrollers";

const router = Router()

router.post("/", async (req: Request, res: Response) => {
    
    const { name, description, price, published, image_url, category, brand, style } = req.body
    const product = await CreateProductAdmin(name, description, price, published, image_url, category, brand, style)
    res.json(product)

});



export default router;