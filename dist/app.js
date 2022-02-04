"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lusca_1 = __importDefault(require("lusca"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const movie_1 = __importDefault(require("./routers/movie"));
const user_1 = __importDefault(require("./routers/user"));
const product_1 = __importDefault(require("./routers/product"));
const variant_1 = __importDefault(require("./routers/variant"));
const order_1 = __importDefault(require("./routers/order"));
const login_1 = __importDefault(require("./routers/login"));
const apiErrorHandler_1 = __importDefault(require("./middlewares/apiErrorHandler"));
const apiContentType_1 = __importDefault(require("./middlewares/apiContentType"));
const compression_1 = __importDefault(require("compression"));
const passport_2 = require("./config/passport");
dotenv_1.default.config({ path: '.env' });
const app = express_1.default();
// Express configuration
app.use(cors_1.default());
app.set('port', process.env.PORT || 5000);
app.use(apiContentType_1.default);
// Use common 3rd-party middlewares
app.use(compression_1.default());
app.use(express_1.default.json());
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.googleStrategy);
// Use movie router
app.use('/api/v1/movies', movie_1.default);
app.use('/api/v1/users', user_1.default);
app.use('/api/v1/products', product_1.default);
app.use('/api/v1/variants', variant_1.default);
app.use('/api/v1/orders', order_1.default);
app.use('/api/v1/google/login', login_1.default);
// Custom API error handler
app.use(apiErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map