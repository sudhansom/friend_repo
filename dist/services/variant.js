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
const Variant_1 = __importDefault(require("../models/Variant"));
const apiError_1 = require("../helpers/apiError");
const create = (variant) => __awaiter(void 0, void 0, void 0, function* () {
    return variant.save();
});
const update = (variantId, update) => __awaiter(void 0, void 0, void 0, function* () {
    const foundVariant = yield Variant_1.default.findByIdAndUpdate(variantId, update, {
        new: true,
    });
    if (!foundVariant) {
        throw new apiError_1.NotFoundError(`Product ${variantId} not found`);
    }
    return foundVariant;
});
const findVariantById = (variantId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundVariant = yield Variant_1.default.findById(variantId);
    if (!foundVariant) {
        throw new apiError_1.NotFoundError(`Product ${variantId} not found`);
    }
    return foundVariant;
});
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return Variant_1.default.find();
});
const deleteVariant = (variantId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundVariant = Variant_1.default.findByIdAndDelete(variantId);
    if (!foundVariant) {
        throw new apiError_1.NotFoundError(`Product ${variantId} not found`);
    }
    return foundVariant;
});
exports.default = {
    create,
    update,
    findVariantById,
    findAll,
    deleteVariant,
};
//# sourceMappingURL=variant.js.map