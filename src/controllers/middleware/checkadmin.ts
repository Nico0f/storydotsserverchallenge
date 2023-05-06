const jwt = require("jsonwebtoken")
import prisma from "../../prisma";
import { config } from "dotenv";
config();

//* /AdminStatus/


async function checkAdmin(req: any, res: any, next: any) {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const checkToken = jwt.verify(token, process.env.JWTKEYAT)
            let user = await prisma.user.findUnique({
                where: {
                    id: checkToken.id
                }
            })
            if (user.is_admin === true) {
                next()
            } else {
                res.status(401).send("No admin status!")
            }
        } catch (error) {
            console.log(error)
            res.status(403).send("Not authorized!")
        }

    }
    
    if (!token) {
      res.status(401).send("No token!")
    }

}

export default checkAdmin