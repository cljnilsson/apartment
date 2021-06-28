"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("../db/core"));
require("../db/generate");
const typeorm_1 = require("typeorm");
const apartment_1 = __importDefault(require("../db/models/apartment"));
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
server_1.default.post("/search", async (req, res) => {
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
    res.json(await core_1.default.getWhere(apartment_1.default, filter));
});
server_1.default.post("/createadvertisement", async (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
server_1.default.get("*", (req, res) => {
    res.sendfile("./dist/public/index.html");
});
