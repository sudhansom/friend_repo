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
exports.findAll = exports.findOrderById = exports.deleteOrder = exports.updateOrder = exports.createOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const order_1 = __importDefault(require("../services/order"));
const apiError_1 = require("../helpers/apiError");
// POST /orders
exports.createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, userId, quantity, totalPrice, shippingDate } = req.body;
        const order = new Order_1.default({
            productId,
            userId,
            quantity,
            totalPrice,
            shippingDate,
        });
        yield order_1.default.create(order);
        res.json(order);
    }
    catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(error);
        }
    }
});
exports.updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = req.body;
        const orderId = req.params.userId;
        const updatedOrder = yield order_1.default.update(orderId, update);
        res.json(updatedOrder);
    }
    catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(error);
        }
    }
});
exports.deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_1.default.deleteOrder(req.params.orderId);
        res.status(204).end();
    }
    catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(error);
        }
    }
});
exports.findOrderById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield order_1.default.findOrderById(req.params.orderId));
    }
    catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(error);
        }
    }
});
exports.findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield order_1.default.findAll());
    }
    catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new apiError_1.BadRequestError('Invalid Request', error));
        }
        else {
            next(error);
        }
    }
});
//# sourceMappingURL=order.js.map