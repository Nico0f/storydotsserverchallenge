import { Router } from "express";

const router = Router()

router.post("/", async (req, res) => {
    // const products = await getAllProducts()
    // res.json(products)
    res.send('lalala')

});

export default router;

