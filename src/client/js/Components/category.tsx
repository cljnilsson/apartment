import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./svgs/Loading";
import Get from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Category() {
	let context = useContext(GlobalContext);

	let { category } = useParams();

	console.log(context)

	return <>
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item"><a href="/catalog">Catalog</a></li>
				<li className="breadcrumb-item active" aria-current="page">{category}</li>
			</ol>
		</nav>
		<div className="pt-3"><Listing cache={"getapartmentbytype" + category} url={"/api/apartments/catagory/" + category}/></div>
	</>;
}
   

export default Category;