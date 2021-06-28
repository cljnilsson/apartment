import DB from "./core";
import Image from "./models/image";
import Tag from "./models/tag";
import Apartment from "./models/apartment";

DB.addSubscriber(test);

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

declare global {
	interface Array<T> {
		random(): T
	}
}

Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

async function makeRandomTagForAd(listing) { // Can create duplicates but it does not matter since its for testing only
	let t = tags.random();

	console.log(t)

	DB.create(Tag, {parent: listing, name: t});
}

async function dumpTest() {
	let listing = await DB.create(Apartment, {
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
	
	await DB.create(Image, {parent: listing, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/182/182567865.jpg"});
	await DB.create(Image, {parent: listing, path: "https://q-xx.bstatic.com/images/hotel/max1024x768/241/241486183.jpg"});
	await DB.create(Image, {parent: listing, path: "https://castillohomes.se/img/resale-apartment-torrevieja-centro_7163_md.jpg"});


	makeRandomTagForAd(listing);
	makeRandomTagForAd(listing);
	makeRandomTagForAd(listing);
}

async function test () {
	//let users = await DB.get(User);

	/*if(users.length === 0) {
		DB.createUser({name: "admin", pass: "admin"}); // User
	}*/

	let all = await DB.getFirstWhere(Apartment, {});

	if(!all) {
		for(let i = 0; i < 10; i++) {
			dumpTest();
		}
	}
}