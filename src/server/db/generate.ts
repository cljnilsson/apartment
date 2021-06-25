import DB from "./core";
import Image from "./models/image";
import Apartment from "./models/apartment";

DB.addSubscriber(test);

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
}

async function test () {
	//let users = await DB.get(User);

	/*if(users.length === 0) {
		DB.createUser({name: "admin", pass: "admin"}); // User
	}*/

	let all = await DB.get(Apartment);
	if(all.length === 0) {
		for(let i = 0; i < 10; i++) {
			dumpTest();
		}
	}
}