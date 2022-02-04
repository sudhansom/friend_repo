"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = require("../controllers/order");
const router = express_1.default.Router();
// Every path we define here will get /api/v1/users prefix
router.get('/', order_1.findAll);
router.get('/:orderId', order_1.findOrderById);
router.put('/:orderId', order_1.updateOrder);
router.delete('/:orderId', order_1.deleteOrder);
router.post('/', order_1.createOrder);
exports.default = router;
//# sourceMappingURL=order.js.map