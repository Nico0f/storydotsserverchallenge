import { Router } from "express";
import { getOneProduct } from "../../controllers/productcontrollers";
// import  getAllWines  from '../../controllers/GetAllWines';
// import filterAllWines from "../../controllers/FilterAllWines"

const router = Router()

router.get("/:id", async (req, res) => {
    
    const { id } = req.params
    const product = await getOneProduct(id)
    res.json(product)

});



export default router;