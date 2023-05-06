import prisma from "../prisma";
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
import { config } from "dotenv";
config();

export async function createUser(first_name: string, last_name: string, email: string, password: string) {

    try {
        const hashed_pass = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data:{
                first_name,
                last_name,
                email,
                avatar: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1678391539/avatars/profile_vru7vi.png',
                hashed_pass
            }
        })

        return newUser
    } catch (error) {
        console.log(error)
        return {
            message: 'Error'
        }
    }
    
}

export async function loginUser(email: string, password: string) {

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) return {message: "User doesnt exist!"}
        
        const comparePassword = await bcrypt.compare(password, user.hashed_pass)

        if (!comparePassword) {
            return {message: "Incorrect Password!"}
        }

        if(!user.is_active) return {message: "Inactive user!"}

        const token = await jwt.sign({id: user.id}, process.env.JWTKEYAT, {expiresIn: "2d"})

        if (user.is_admin) {
            return {
                message: 'Success',
                admin: true,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                token
            }
        }
    
        return {
            message: 'Success',
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar,
            token
        }

    } catch (error) {
        console.log(error)
    }
    
}
