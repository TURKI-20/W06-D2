"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const port = 3000;
const users = [];
app.get('./', (req, res) => {
    res.json(users);
});
app.post('./', (req, res) => {
    const user = req.body;
    user.id = uuidv4();
    users.push(user);
    res.json({
        message: "user added"
    });
});
app.listen(port, () => {
    console.log('server start');
});
