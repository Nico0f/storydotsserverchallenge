import { Router } from "express";
import { createUser } from "../../controllers/usercontrollers";

const router = Router()

router.post("/", async (req, res) => {

    try {

        const { first_name, last_name, email, password } = req.body
        
        const newUser = await createUser(first_name, last_name, email, password)

        if (newUser) {
            const reponse = {
                message: "Success",
                first_name,
                last_name,
                email,
                avatar: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1678391539/avatars/profile_vru7vi.png'
            }
            res.status(200).json(reponse)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Unable to sign up", error })
    }

});

export default router;
