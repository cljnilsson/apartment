"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.adminBro = void 0;
const admin_bro_1 = __importDefault(require("admin-bro"));
const express_1 = __importDefault(require("@admin-bro/express"));
const image_1 = __importDefault(require("./db/models/image"));
const tag_1 = __importDefault(require("./db/models/tag"));
const apartment_1 = __importDefault(require("./db/models/apartment"));
const adminBro = new admin_bro_1.default({
    resources: [
        { resource: apartment_1.default },
        { resource: image_1.default },
        { resource: tag_1.default }
    ],
    rootPath: "/admin",
});
exports.adminBro = adminBro;
const router = express_1.default.buildRouter(adminBro);
exports.router = router;
