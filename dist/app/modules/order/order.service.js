"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderservice = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   const result = await Tour.create(payload)
    const data = new order_model_1.default(payload);
    //   data.color = "red"
    const result = yield data.save();
    return result;
});
const getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.default.find();
        return result;
    }
    catch (error) {
        console.error("Error in getOrder service:", error);
        throw error;
    }
});
// --------------revenue--------------
const getRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield order_model_1.default.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$totalPrice" },
                },
            },
        ]);
        return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
    }
    catch (error) {
        console.error("Error in calculateRevenue service:", error);
        throw error;
    }
});
exports.Orderservice = {
    createOrder,
    getOrder,
    getRevenue
};
