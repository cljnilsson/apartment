import DB from "./db/core";
import AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";

import Image from "./db/models/image";
import Tag from "./db/models/tag";
import Apartment from "./db/models/apartment";
/*import Option from "./db/models/option";
import Highscore from "./db/models/highscore";

Quiz.useConnection(DB.connection);
Question.useConnection(DB.connection);
Option.useConnection(DB.connection);
Option.useConnection(DB.connection);*/

const adminBro = new AdminBro({
	resources: [
		{ resource: Apartment },
		{ resource: Image },
		{ resource: Tag }
	],
	rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro);

export {adminBro, router}