"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const login_1 = require("../controllers/login");
const router = express_1.default.Router();
router.post('/', passport_1.default.authenticate('google-id-token', { session: false }), login_1.googleLogin);
exports.default = router;
//# sourceMappingURL=login.js.map