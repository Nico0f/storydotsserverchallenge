"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//* /AdminStatus/
async function checkAdmin(req, res, next) {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const checkToken = jwt.verify(token, process.env.JWTKEYAT);
            let user = await prisma_1.default.user.findUnique({
                where: {
                    id: checkToken.id
                }
            });
            if (user.is_admin === true) {
                next();
            }
            else {
                res.status(401).send("No admin status!");
            }
        }
        catch (error) {
            console.log(error);
            res.status(403).send("Not authorized!");
        }
    }
    if (!token) {
        res.status(401).send("No token!");
    }
}
exports.default = checkAdmin;
//# sourceMappingURL=checkadmin.js.map