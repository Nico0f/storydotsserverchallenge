import { Router, Request, Response } from "express";
import { checkAdmin } from "../../controllers/authorizationcontrollers";

const router = Router()

router.post("/", async (req: Request, res: Response) => {
    
    try {
        const { email } = req.body
        const response = await checkAdmin(email)
        res.json(response)

    } catch (error) {
        console.log(error)
        res.json({
            message: 'Error'
        })
    }

});



export default router;