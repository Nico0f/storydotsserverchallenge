import { Router, Request, Response } from "express";
import { getAllProductsAdmin } from "../../controllers/productcontrollers";

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const { limit, offset, category, style } = req.query

    const products = await getAllProductsAdmin(Number(limit), Number(offset), String(category), String(style))

    res.json({
        products: products.content,
        count: products.count
    })

});



export default router;