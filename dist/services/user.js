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
const User_1 = __importDefault(require("../models/User"));
const apiError_1 = require("../helpers/apiError");
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return user.save();
});
const findUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield User_1.default.findById(userId);
    if (!foundUser) {
        throw new apiError_1.NotFoundError(`Movie ${userId} not found`);
    }
    return foundUser;
});
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.default.find();
});
const update = (userId, update) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield User_1.default.findByIdAndUpdate(userId, update, {
        new: true,
    });
    if (!foundUser) {
        throw new apiError_1.NotFoundError(`User ${userId} not found`);
    }
    return foundUser;
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = User_1.default.findByIdAndDelete(userId);
    if (!foundUser) {
        throw new apiError_1.NotFoundError(`User ${userId} not found`);
    }
    return foundUser;
});
const findOneOrCreate = (userProfile) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, given_name, family_name } = userProfile;
    const foundUser = yield User_1.default.findOne({ email: email });
    if (!foundUser) {
        const newUser = new User_1.default({
            email,
            given_name,
            family_name,
        });
        const createdUser = yield newUser.save();
        return createdUser;
    }
    else {
        return foundUser;
    }
});
exports.default = {
    create,
    findUserById,
    findAll,
    update,
    deleteUser,
    findOneOrCreate,
};
//# sourceMappingURL=user.js.map