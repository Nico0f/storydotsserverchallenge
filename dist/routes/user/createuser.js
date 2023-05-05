"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontrollers_1 = require("../../controllers/usercontrollers");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        const newUser = await (0, usercontrollers_1.createUser)(first_name, last_name, email, password);
        if (newUser) {
            const reponse = {
                message: "Success",
                first_name,
                last_name,
                email,
                avatar: 'https://res.cloudinary.com/dgcsnhguo/image/upload/v1678391539/avatars/profile_vru7vi.png'
            };
            res.status(200).json(reponse);
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Unable to sign up", error });
    }
});
exports.default = router;
//# sourceMappingURL=createuser.js.map