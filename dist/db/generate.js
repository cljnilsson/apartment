"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("./core"));
const image_1 = __importDefault(require("./models/image"));
const tag_1 = __importDefault(require("./models/tag"));
const apartment_1 = __importDefault(require("./models/apartment"));
core_1.default.addSubscriber(test);
let tags = [
    "Mountain View",
    "Communal Services Included",
    "Animals Allowed",
    "Nearby Park(s)",
    "Balcony",
    "Central Heating",
    "Low Floors (1-6)",
    "High Floors (7+)",
    "Brand New",
];
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};
async function makeRandomTagForAd(listing) {
    let t = tags.random();
    console.log(t);
    core_1.default.create(tag_1.default, { parent: listing, name: t });
}
async function dumpTest() {
    let listing = await core_1.default.create(apartment_1.default, {
        title: "some apartment",
        description: "wow such an amazing apartment",
        price: 1000,
        bedroom: 1,
        bathroom: 1,
        rooms: 5,
        floor: 3,
        maxfloor: 8,
        size: 100,
        area: "City Central",
        buildingtype: "Apartment"
    });
    await core_1.default.create(image_1.default, { parent: listing, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/182/182567865.jpg" });
    await core_1.default.create(image_1.default, { parent: listing, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/241/241486183.jpg" });
    await core_1.default.create(image_1.default, { parent: listing, path: "https://castillohomes.se/img/resale-apartment-torrevieja-centro_7163_md.jpg" });
    makeRandomTagForAd(listing);
    makeRandomTagForAd(listing);
    makeRandomTagForAd(listing);
}
async function test() {
    let all = await core_1.default.getFirstWhere(apartment_1.default, {});
    if (!all) {
        for (let i = 0; i < 10; i++) {
            dumpTest();
        }
    }
}
