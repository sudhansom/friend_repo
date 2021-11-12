"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const variant_1 = require("../controllers/variant");
const router = express_1.default.Router();
router.get('/', variant_1.findAll);
router.get('/:productId', variant_1.findVariantById);
router.put('/:productId', variant_1.updateVariant);
router.delete('/:productId', variant_1.deleteVariant);
router.post('/', variant_1.createVariant);
exports.default = router;
//# sourceMappingURL=variant.js.map