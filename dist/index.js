"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const port = Number(process.env.PORT) || 3000;
app_1.app.get('/', async (req, res) => {
    res.send('Hello World');
});
app_1.app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map