"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("./core"));
const image_1 = __importDefault(require("./models/image"));
const apartment_1 = __importDefault(require("./models/apartment"));
core_1.default.addSubscriber(test);
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
}
async function test() {
    let all = await core_1.default.get(apartment_1.default);
    if (all.length === 0) {
        for (let i = 0; i < 10; i++) {
            dumpTest();
        }
    }
}
