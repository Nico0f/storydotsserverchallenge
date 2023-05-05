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

    }
    
}

export async function loginUser(email: string, password: string) {

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!existingUser) return {message: "User doesnt exist!"}
        
        const comparePassword = await bcrypt.compare(password, existingUser.hashed_pass)

        if (!comparePassword) {
            return {message: "Incorrect Password!"}
        }

        if(!existingUser.is_active) return {message: "Inactive user!"}

        const token = await jwt.sign({_id: existingUser.id}, process.env.JWTKEYAT, {expiresIn: "2d"})
    
        return {
            message: 'Success',
            first_name: existingUser.first_name,
            last_name: existingUser.last_name,
            email: existingUser.email,
            avatar: existingUser.avatar,
            token
        }

    } catch (error) {
        console.log(error)
    }
    
}
