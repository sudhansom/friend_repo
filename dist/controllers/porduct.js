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
exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const apiError_1 = require("../helpers/apiError");
exports.createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, price, description } = req.body;
        const product = new Product_1.default({
            name,
            image,
            price,
            description,
        });
        yield MovieService.create(product);
        res.json(product);
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
//# sourceMappingURL=porduct.js.map