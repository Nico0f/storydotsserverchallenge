import { Router } from "express"
import { loginUser } from "../../controllers/usercontrollers";

const router = Router()

router.post("/", async (req, res) => {
    
    const {email, password} = req.body
    
    try {
        const response = await loginUser(email, password)
        if (response.message === 'Success') {
            return res.status(200).json(response)
        } else {
            return res.status(400).json(response)
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Error'
        })
    }


});

export default router;
