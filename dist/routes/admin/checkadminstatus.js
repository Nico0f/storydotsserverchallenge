"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorizationcontrollers_1 = require("../../controllers/authorizationcontrollers");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    try {
        const { email } = req.body;
        const response = await (0, authorizationcontrollers_1.checkAdmin)(email);
        res.json(response);
    }
    catch (error) {
        console.log(error);
        res.json({
            message: 'Error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=checkadminstatus.js.map