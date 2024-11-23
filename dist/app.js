"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const carstore_router_1 = __importDefault(require("./app/modules/CarStore/carstore.router"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Mount the routes
app.use('/api/cars', carstore_router_1.default);
// Default route
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server is running successfully 🏃🏽‍♂️➡️',
    });
});
exports.default = app;
