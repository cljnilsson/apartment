import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./svgs/Loading";
import Get from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Search() {
	let context = useContext(GlobalContext);

	let { minPrice } = useParams();

	console.log(context)

	return <>
		
	</>;
}
   

export default Search;