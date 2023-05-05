"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
// app.use(morgan('dev'));
exports.app.use(express_1.default.json());
// app.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : './temporalImg/'
// }))
exports.app.use((0, cors_1.default)({
    origin: "*",
}));
exports.app.use('/', index_1.default);
//# sourceMappingURL=app.js.map