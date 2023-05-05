"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontrollers_1 = require("../../controllers/usercontrollers");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await (0, usercontrollers_1.loginUser)(email, password);
        if (response.message === 'Success') {
            return res.status(200).json(response);
        }
        else {
            return res.status(400).json(response);
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=loginuser.js.map