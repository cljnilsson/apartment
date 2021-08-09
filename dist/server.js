"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const ngrok_1 = __importDefault(require("ngrok"));
const app = express_1.default();
const adminbro_1 = require("./adminbro");
app.use(adminbro_1.adminBro.options.rootPath, adminbro_1.router);
class Server {
    static get port() {
        return process.env.PORT || 3000;
        ;
    }
    constructor() {
        this.dependencies();
        this.middleware();
        this.startup();
    }
    dependencies() {
    }
    middleware() {
        app.use(body_parser_1.default.urlencoded({ extended: false }));
        app.use(cors_1.default());
        app.use(helmet_1.default());
        app.use(body_parser_1.default.json());
        app.use(express_1.default.static(__dirname + "/public"));
    }
    startup() {
        app.listen(Server.port);
        console.log(`started on port ${Server.port}`);
    }
}
new Server();
(async function () {
    const url = await ngrok_1.default.connect(Number(Server.port));
    console.log("Public url: " + url);
})();
module.exports = app;
