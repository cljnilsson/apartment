import DB from "../db/core";
import "../db/generate";
import {MoreThanOrEqual, LessThanOrEqual, Between, Like, In, FindOperator} from "typeorm";

import Apartment from "../db/models/apartment";

import app from "../server";

app.get("/", (req, res) => {
	res.sendfile("./dist/public/index.html");
});

app.get("/api/apartments", async (req, res) => {
	res.json(await DB.get(Apartment));
});

app.get("/api/apartments/catagory/:name", async (req, res) => {
	res.json(await DB.getWhere(Apartment, {buildingtype: req.params.name}));
});

app.get("/api/apartments/:id", async (req, res) => {
	res.json(await DB.getFirstWhere(Apartment, {id: req.params.id}));
});

interface iSearch {
	price: FindOperator<number>;
    size : FindOperator<number>;
    area?: string;
    buildingtype?: string;
    rooms?: FindOperator<number>;
}

app.post("/search", async (req, res) => {
	console.log(req.body);

	// Remove price/size if both params are undefined?
	req.body.minPrice = req.body.minPrice || 0;
	req.body.maxPrice = req.body.maxPrice || 99999999;
	req.body.minSize  = req.body.minSize  || 0;
	req.body.maxSize  = req.body.maxSize  || 99999999;

	let filter : iSearch = {
		price: Between(req.body.minPrice, req.body.maxPrice),
		size: Between(req.body.minSize, req.body.maxSize),
		//title: Like(`%some%`),
		area: req.body.area,
		buildingtype: req.body.buildingtype,
		rooms: In(req.body.rooms)
	};

	if(!filter.area) delete filter.area;

	if(!filter.buildingtype) delete filter.buildingtype

	if(!req.body.rooms) delete filter.rooms

	res.json(await DB.getWhere(Apartment, filter));
});

app.post("/createadvertisement", async (req, res) => {
	console.log(req.body);

	res.json(req.body);
});

// Lazy solution to always attempt to render the site
app.get("*", (req, res) => {
	res.sendfile("./dist/public/index.html");
});

