import { Router } from "express";
import { getAllProducts } from "../../controllers/productcontrollers";

const router = Router()

router.get("/", async (req, res) => {
    const { limit, offset, category, style } = req.query

    const products = await getAllProducts(Number(limit), Number(offset), String(category), String(style))
    const responseheader = {
        'limit': limit,
        'offset': offset,
        'count': products.count
    }
    res.set(responseheader)
    res.json(products.content)

});



export default router;