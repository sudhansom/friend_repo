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
exports.findAll = exports.findVariantById = exports.deleteVariant = exports.updateVariant = exports.createVariant = void 0;
const Variant_1 = __importDefault(require("../models/Variant"));
const variant_1 = __importDefault(require("../services/variant"));
const apiError_1 = require("../helpers/apiError");
exports.createVariant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, productColor, productSize } = req.body;
        const variant = new Variant_1.default({
            productId,
            productColor,
            productSize,
        });
        yield variant_1.default.create(variant);
        res.json(variant);
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
exports.updateVariant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = req.body;
        const variantId = req.params.variantId;
        const updateVariant = yield variant_1.default.update(variantId, update);
        res.json(updateVariant);
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
exports.deleteVariant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variantId = req.params.variantId;
        yield variant_1.default.deleteVariant(variantId);
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
exports.findVariantById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield variant_1.default.findVariantById(req.params.variantId));
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
        res.json(yield variant_1.default.findAll());
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
//# sourceMappingURL=variant.js.map