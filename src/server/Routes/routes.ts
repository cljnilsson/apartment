import DB from "../db/core";
import "../db/generate";
import {MoreThanOrEqual, LessThanOrEqual, Between, Like, In, FindOperator} from "typeorm";

import Apartment from "../db/models/apartment";
import Image from "../db/models/image";
import Tag from "../db/models/tag";

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

function findCommonElements(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

app.post("/api/search", async (req, res) => {
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

	let tags = [
		req.body.mountainview 				? "Mountain View" 				: undefined,
		req.body.communalservicesincluded 	? "Communal Services Included" 	: undefined,
		req.body.animalsallowed 			? "animals Allowed" 		 	: undefined,

		req.body.nearbyparks 				? "Nearby Park(s)"				: undefined,
		req.body.balcony 					? "Balcony" 					: undefined,
		req.body.centralheating 			? "Central Heating" 			: undefined,

		req.body.lowfloors 					? "Low Floors (1-6)" 			: undefined,
		req.body.highfloors 				? "High Floors (7+)" 			: undefined,
		req.body.brandnew 					? "Brand New" 		 			: undefined
	].filter((v) => v !== undefined);

	let result = await DB.getWhere(Apartment, filter);
	let filtered = [...result];
	
	if(tags.length > 0) {
		for(let r of result) {
			let t =  r.tags.map(v => v.name)
			if(!findCommonElements(tags, t)) {
				filtered = filtered.filter(i => i !== r);
			}
		}
	}

	res.json(filtered);
});

interface iAd {
    title: string;
	description: string;
    buildingtype: string;
	area: string;

	bedroom: string,
	bathroom: string,
	rooms: string;

	floor?: string,
	price: string;
	size: string;
}

app.post("/createadvertisement", async (req, res) => {
	console.log(req.body);

	let data : iAd = {
		title: req.body.title,
		description: req.body.ad,
		buildingtype: req.body.propertytype,
		area: req.body.location,

		bedroom: req.body.bedroom,
		bathroom: req.body.bathroom,
		rooms: req.body.rooms,

		floor: req.body.floor ? req.body.floor : "",

		price: req.body.price,
		size: req.body.area
	};

	let a = await DB.create(Apartment, data);

	if(req.body.mountainview)
		DB.create(Tag, {name: "Mountain View"				, parent: a});

	if(req.body.communalservicesincluded)
		DB.create(Tag, {name: "Communal Services Included"	, parent: a});

	if(req.body.animalsallowed)
		DB.create(Tag, {name: "Animals Allowed"				, parent: a});

	if(req.body.nearbypark)
		DB.create(Tag, {name: "Nearby Parks"				, parent: a});

	if(req.body.balcony)
		DB.create(Tag, {name: "Balcony"						, parent: a});

	if(req.body.centralheating)
		DB.create(Tag, {name: "Central Heating"				, parent: a});

	if(req.body.lowfloors)
		DB.create(Tag, {name: "Low Floors (1-6)"			, parent: a});	

	if(req.body.highfloors)
		DB.create(Tag, {name: "High Floors (7+)"			, parent: a});	

	if(req.body.brandnew)
		DB.create(Tag, {name: "Brand New"					, parent: a});	

	DB.create(Image, {parent: a, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/241/241486183.jpg"}); // TODO proper image upload
	
	res.json(req.body);
});

// Lazy solution to always attempt to render the site
app.get("*", (req, res) => {
	res.sendfile("./dist/public/index.html");
});

