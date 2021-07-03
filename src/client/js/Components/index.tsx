import React, { InputHTMLAttributes, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "./svgs/Loading";
import {Get, Post} from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Index() {
	const history = useHistory();
	const params = new URLSearchParams();

	const [minPrice, setMinPrice] 			= useState("");
	const [maxPrice, setMaxPrice] 			= useState("");
	const [minSize, setMinSize] 			= useState("");
	const [maxSize, setMaxSize] 			= useState("");
	const [area, setArea] 					= useState("");
	const [buildingType, setbuildingtype] 	= useState("");
	const [rooms, setRooms] 				= useState("");

	async function afterSubmission(event) {
		event.preventDefault();

		setMinPrice(minPrice === "" ? undefined : minPrice);
		setMaxPrice(maxPrice === "" ? undefined : maxPrice);
		setMinSize (minSize  === "" ? undefined : minSize);
		setMaxSize (maxSize  === "" ? undefined : maxSize);

		setArea			(area 		 === "" 	|| area  		 === "ANY" ? undefined : area);
		setbuildingtype (buildingType === ""  	|| buildingType  === "ANY" ? undefined : buildingType);

		if(minPrice) params.append("minPrice", minPrice);
		if(maxPrice) params.append("maxPrice", maxPrice);

		if(minSize) params.append("minSize", minSize);
		if(maxSize) params.append("maxSize", maxSize);
		
		if(area) params.append("area", area);

		if(buildingType)params.append("buildingtype", buildingType);

		history.push("/search?" + params);
		/*
		console.log(params.toString())

		let d = await Post("/search", {
			minPrice: minPrice === "" ? undefined : minPrice,
			maxPrice: maxPrice === "" ? undefined : maxPrice,
			minSize : minSize  === "" ? undefined : minSize,
			maxSize : maxSize  === "" ? undefined : maxSize,

			area		 : area 		=== "" 	|| area  		 === "ANY" ? undefined : area,
			buildingtype : buildingType === ""  || buildingType  === "ANY" ? undefined : buildingType,
		});
		
		console.log(d);*/
	}

	let context = useContext(GlobalContext);

	const { status, error, data } = Get("allapartments", "/api/apartments");

	if (status === "loading") {
		context.setLoading(true);
		return <Loading />
	}

	if (error) return <span>An error has occurred: {error.message}</span>
	context.setLoading(false);

	function search() {
		return (
		<div className="my-3 mx-auto w-75">
			<form className="p-3" onSubmit={afterSubmission}>
				<div className="form-row align-items-end">
					<div className="form-group col-md-4">
						<label>PROPERTY TYPES</label>
						<select className="form-control" onChange={event => setbuildingtype(event.target.value)}>
							<option selected>ANY</option>
							<option>Apartment</option>
							<option>Penthouse</option>
							<option>Club-house</option>
							<option>House</option>
							<option>Cottage</option>
							<option>Office</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label>Location</label>
						<select className="form-control" onChange={event => setArea(event.target.value)}>
							<option selected>ANY</option>
							<option>City Center</option>
							<option>Downtown</option>
							<option>Erkindik Boulevard</option>
							<option>Dordoi Plaza</option>
							<option>VEFA center</option>
							<option>SOuthern Bishkek</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<input type="text" className="form-control" placeholder="ROOMS" />
					</div>
				</div>
				<div className="form-row align-items-end">
				<div className="form-group col-md-2">
						<div className="input-group">
							<label>Price (USD)</label>
							<div className="input-group-prepend">
								<div className="input-group-text">Min</div>
							</div>
							<input onChange={event => setMinPrice(event.target.value)}  type="number" className="form-control"/>
						</div>
					</div>
					<div className="form-group col-md-2">
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">Max</div>
							</div>
							<input onChange={event => setMaxPrice(event.target.value)}  type="number" className="form-control"/>
						</div>
					</div>
					<div className="form-group col-md-2">
						<div className="input-group">
							<label>Area (Sqft)</label>
							<div className="input-group-prepend">
								<div className="input-group-text">Min</div>
							</div>
							<input onChange={event => setMinSize(event.target.value)} type="number" className="form-control"/>
						</div>
					</div>
					<div className="form-group col-md-2">
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">Max</div>
							</div>
							<input onChange={event => setMaxSize(event.target.value)} type="number" className="form-control"/>
						</div>
					</div>
					<div className="form-group col-md-4">
						<input type="text" className="form-control" />
					</div>
				</div>
				<button className="btn btn-dark">Search</button>
			</form>
		</div>);
	}

	return <div>
		<div id="formbg" className="py-5">{search()}</div>
		<h3 className="border-bottom text-center py-3">MODERN | COMFORTABLE | SAFE</h3>
		
		<div className="pt-3"><Listing cache="allapartments" url="/api/apartments"/></div>
	</div>;
}
   

export default Index;