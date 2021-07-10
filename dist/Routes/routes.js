"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("../db/core"));
require("../db/generate");
const typeorm_1 = require("typeorm");
const apartment_1 = __importDefault(require("../db/models/apartment"));
const image_1 = __importDefault(require("../db/models/image"));
const tag_1 = __importDefault(require("../db/models/tag"));
const server_1 = __importDefault(require("../server"));
server_1.default.get("/", (req, res) => {
    res.sendfile("./dist/public/index.html");
});
server_1.default.get("/api/apartments", async (req, res) => {
    res.json(await core_1.default.get(apartment_1.default));
});
server_1.default.get("/api/apartments/catagory/:name", async (req, res) => {
    res.json(await core_1.default.getWhere(apartment_1.default, { buildingtype: req.params.name }));
});
server_1.default.get("/api/apartments/:id", async (req, res) => {
    res.json(await core_1.default.getFirstWhere(apartment_1.default, { id: req.params.id }));
});
function findCommonElements(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}
server_1.default.post("/api/search", async (req, res) => {
    console.log(req.body);
    req.body.minPrice = req.body.minPrice || 0;
    req.body.maxPrice = req.body.maxPrice || 99999999;
    req.body.minSize = req.body.minSize || 0;
    req.body.maxSize = req.body.maxSize || 99999999;
    let filter = {
        price: typeorm_1.Between(req.body.minPrice, req.body.maxPrice),
        size: typeorm_1.Between(req.body.minSize, req.body.maxSize),
        area: req.body.area,
        buildingtype: req.body.buildingtype,
        rooms: typeorm_1.In(req.body.rooms)
    };
    if (!filter.area)
        delete filter.area;
    if (!filter.buildingtype)
        delete filter.buildingtype;
    if (!req.body.rooms)
        delete filter.rooms;
    let tags = [
        req.body.mountainview ? "Mountain View" : undefined,
        req.body.communalservicesincluded ? "Communal Services Included" : undefined,
        req.body.animalsallowed ? "animals Allowed" : undefined,
        req.body.nearbyparks ? "Nearby Park(s)" : undefined,
        req.body.balcony ? "Balcony" : undefined,
        req.body.centralheating ? "Central Heating" : undefined,
        req.body.lowfloors ? "Low Floors (1-6)" : undefined,
        req.body.highfloors ? "High Floors (7+)" : undefined,
        req.body.brandnew ? "Brand New" : undefined
    ].filter((v) => v !== undefined);
    let result = await core_1.default.getWhere(apartment_1.default, filter);
    let filtered = [...result];
    if (tags.length > 0) {
        for (let r of result) {
            let t = r.tags.map(v => v.name);
            if (!findCommonElements(tags, t)) {
                filtered = filtered.filter(i => i !== r);
            }
        }
    }
    res.json(filtered);
});
server_1.default.post("/createadvertisement", async (req, res) => {
    console.log(req.body);
    let data = {
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
    let a = await core_1.default.create(apartment_1.default, data);
    if (req.body.mountainview)
        core_1.default.create(tag_1.default, { name: "Mountain View", parent: a });
    if (req.body.communalservicesincluded)
        core_1.default.create(tag_1.default, { name: "Communal Services Included", parent: a });
    if (req.body.animalsallowed)
        core_1.default.create(tag_1.default, { name: "Animals Allowed", parent: a });
    if (req.body.nearbypark)
        core_1.default.create(tag_1.default, { name: "Nearby Parks", parent: a });
    if (req.body.balcony)
        core_1.default.create(tag_1.default, { name: "Balcony", parent: a });
    if (req.body.centralheating)
        core_1.default.create(tag_1.default, { name: "Central Heating", parent: a });
    if (req.body.lowfloors)
        core_1.default.create(tag_1.default, { name: "Low Floors (1-6)", parent: a });
    if (req.body.highfloors)
        core_1.default.create(tag_1.default, { name: "High Floors (7+)", parent: a });
    if (req.body.brandnew)
        core_1.default.create(tag_1.default, { name: "Brand New", parent: a });
    core_1.default.create(image_1.default, { parent: a, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/241/241486183.jpg" });
    res.json(req.body);
});
server_1.default.get("*", (req, res) => {
    res.sendfile("./dist/public/index.html");
});
