"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
async function createUser(first_name, last_name, email, password) {
    try {
        const hashed_pass = await bcrypt.hash(password, 10);
        const newUser = await prisma_1.default.user.create({
            data: {
                first_name,
                last_name,
                email,
                avatar: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1678391539/avatars/profile_vru7vi.png',
                hashed_pass
            }
        });
        return newUser;
    }
    catch (error) {
    }
}
exports.createUser = createUser;
async function loginUser(email, password) {
    try {
        const user = await prisma_1.default.user.findUnique({
            where: {
                email
            }
        });
        if (!user)
            return { message: "User doesnt exist!" };
        const comparePassword = await bcrypt.compare(password, user.hashed_pass);
        if (!comparePassword) {
            return { message: "Incorrect Password!" };
        }
        if (!user.is_active)
            return { message: "Inactive user!" };
        const token = await jwt.sign({ id: user.id }, process.env.JWTKEYAT, { expiresIn: "2d" });
        if (user.is_admin) {
            return {
                message: 'Success',
                admin: true,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                token
            };
        }
        return {
            message: 'Success',
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar,
            token
        };
    }
    catch (error) {
        console.log(error);
    }
}
exports.loginUser = loginUser;
//# sourceMappingURL=usercontrollers.js.map