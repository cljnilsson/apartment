import DB from "./db/core";
import  AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";

import Quiz from "./db/models/apartment";
import Question from "./db/models/image";
/*import Option from "./db/models/option";
import Highscore from "./db/models/highscore";

Quiz.useConnection(DB.connection);
Question.useConnection(DB.connection);
Option.useConnection(DB.connection);
Option.useConnection(DB.connection);*/

const adminBro = new AdminBro({
	resources: [
		{ resource: Quiz },
		{ resource: Question }
	],
	rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro);

export {adminBro, router}