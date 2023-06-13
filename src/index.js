"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGODB_URL, {})
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
