"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
// Every path we define here will get /api/v1/users prefix
router.get('/', user_1.findAll);
router.get('/:userId', user_1.findUserById);
router.put('/:userId', user_1.updateUser);
router.delete('/:userId', user_1.deleteUser);
router.post('/', user_1.createUser);
exports.default = router;
//# sourceMappingURL=user.js.map