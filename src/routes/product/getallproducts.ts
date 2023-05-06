import { Router, Request, Response } from "express";
import { getAllProducts } from "../../controllers/productcontrollers";

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const { limit, offset, category, style, order } = req.query

    const products = await getAllProducts(Number(limit), Number(offset), String(category), String(style), String(order))
    const responseheader = {
        'limit': limit,
        'offset': offset,
        'count': products.count
    }
    res.set(responseheader)
    res.json(products.content)

});



export default router;