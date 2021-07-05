import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Loading from "./svgs/Loading";
import {Post} from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Search() {
	async function searchAPI(loc) {
		loc.search = loc.search.substring(1);
		let q = loc.search.includes("&") ? loc.search.split("&") : [loc.search];
		console.log(q)
		let body = {};

		for(let v of q) {
			let t = v.split("=");
			body[t[0]] = t[1];
		}
		console.log(body)
		context.setLoading(true);
		let data = await Post("/api/search", body);
		if(data.length >= 9) {
			context.setLoading(false);
		}

		setApartments(data);
	}

	let context = useContext(GlobalContext);
	let [apartments, setApartments] = useState([])
	let location = useLocation();
	console.log("wowe");

	useEffect(() => {
		searchAPI(location);
	}, []);

	return <>
		<div className="pt-3"><Listing list={apartments}/></div>
	</>;
}
   

export default Search;