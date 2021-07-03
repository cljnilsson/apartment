import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Loading from "./svgs/Loading";
import {Post} from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Search() {
	async function searchAPI() {
		context.setLoading(true);
		let data = await Post("/api/search", {});
		context.setLoading(false);

		console.log(data)

		data = data.map((v) => <p>{v.title}</p>);
		console.log(data)

		setApartments(data);
	}

	let context = useContext(GlobalContext);
	let [apartments, setApartments] = useState([])
	//let location = useLocation();
	console.log("wowe");

	useEffect(() => {
		searchAPI();
	}, []);

	return <>
		<p>Please render :(</p>
		{apartments}
	</>;
}
   

export default Search;