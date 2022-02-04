"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const addressSchema = new mongoose_1.default.Schema({
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
});
exports.default = addressSchema;
//# sourceMappingURL=Address.js.map