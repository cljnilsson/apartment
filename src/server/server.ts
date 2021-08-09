import "reflect-metadata";

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

import ngrok from "ngrok";

const app = express();

import {adminBro, router} from "./adminbro";

app.use(adminBro.options.rootPath, router);

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
        app.use(cors());
        app.use(helmet());
        app.use(bodyParser.json());
        //app.use(compression());
		app.use(express.static(__dirname + "/public"));
    }

    startup() {
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