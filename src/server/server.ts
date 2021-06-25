import "reflect-metadata";

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

import ngrok from "ngrok";

const app = express();

import {adminBro, router} from "./adminbro";

app.use(adminBro.options.rootPath, router);

function header(req, res, next) {
    res.setHeader("Content-Security-Policy", "connect-src 'self' ws:");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

class Server {
    public static get port() {
        return process.env.PORT || 3000;;
    }

    constructor() {
        this.dependencies()
        this.middleware();
        this.startup()
    }

    dependencies() {
    }

    middleware() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(header);
        app.use(helmet());
        app.use(bodyParser.json());
        //app.use(compression());
		app.use(express.static(__dirname + "/public"));
    }

    async startup() {
        app.listen(Server.port);
        console.log(`started on port ${Server.port}`);
    }
}

new Server();

(async function() {
    const url = await ngrok.connect(Number(Server.port));
    console.log("Public url: " + url);
})();

export = app;