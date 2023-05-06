"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
const prisma_1 = __importDefault(require("../prisma"));
async function checkAdmin(email) {
    const user = await prisma_1.default.user.findUnique({
        where: {
            email
        }
    });
    if (user.is_admin) {
        return {
            message: 'Success'
        };
    }
    else {
        return {
            message: 'Not admin'
        };
    }
}
exports.checkAdmin = checkAdmin;
//# sourceMappingURL=authorizationcontrollers.js.map