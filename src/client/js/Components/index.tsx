import React, { InputHTMLAttributes, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "./svgs/Loading";
import {Get, Post} from "../Libs/Request";
import GlobalContext from "./Contexts/GlobalContext";
import Listing from  "./Partials/listing";

function Index() {
	const history = useHistory();
	const params = new URLSearchParams();

	const [minPrice		, setMinPrice] 		= useState("");
	const [maxPrice		, setMaxPrice] 		= useState("");
	const [minSize		, setMinSize] 		= useState("");
	const [maxSize		, setMaxSize] 		= useState("");
	const [area			, setArea] 			= useState("");
	const [buildingType	, setbuildingtype] 	= useState("");
	const [rooms		, setRooms] 		= useState("");

	const [mountainView		, setMountainView]		= useState("");
	const [communalService	, setCommunalService]	= useState("");
	const [animalsAllowed	, setAnimalsAllowed]	= useState("");

	const [nearbyPark		, setNearbyPark]	= useState("");
	const [balcony			, setBalcony]		= useState("");
	const [centralHeating	, setCentralHeating]= useState("");

	const [lowFloors		, setLowFloors]		= useState("");
	const [highFloors		, setHighFloors]	= useState("");
	const [brandNew			, setBrandNew]		= useState("");

	function checkbox(label : string, callback, extraClasses : string = "") {
		let name = label.toLowerCase().replace( /\s/g, "");
		if(name.indexOf("(") > 0) {
			name = name.substr(0, name.indexOf("("));
		}

		return(
			<div className={"form-group col-md-4 " + extraClasses}>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" name={name} onChange={event => callback(event.target.checked ? "on" : "")} />
					<label className="form-check-label">{label}</label>
				</div>
			</div>
		);
	}

	async function afterSubmission(event) {
		event.preventDefault();

		setMinPrice(minPrice === "" ? undefined : minPrice);
		setMaxPrice(maxPrice === "" ? undefined : maxPrice);
		setMinSize (minSize  === "" ? undefined : minSize);
		setMaxSize (maxSize  === "" ? undefined : maxSize);
		setRooms   (rooms  === "" 	? undefined : rooms);

		setArea			(area 		 === "" 	|| area  		 === "ANY" ? undefined : area);
		setbuildingtype (buildingType === ""  	|| buildingType  === "ANY" ? undefined : buildingType);

		if(minPrice) params.append("minPrice", minPrice);
		if(maxPrice) params.append("maxPrice", maxPrice);

		if(minSize) params.append("minSize", minSize);
		if(maxSize) params.append("maxSize", maxSize);
		
		if(area) params.append("area", area);

		if(area) params.append("rooms", rooms);

		if(buildingType)params.append("buildingtype", buildingType);

		if(mountainView)params.append("mountainview", mountainView);
		if(communalService)params.append("communalservicesincluded", communalService);
		if(animalsAllowed)params.append("animalsallowed", animalsAllowed);
		
		if(nearbyPark)params.append("nearbyPark", nearbyPark);
		if(balcony)params.append("balcony", balcony);
		if(centralHeating)params.append("centeralheating", centralHeating);
		
		if(lowFloors)params.append("mountainview", lowFloors);
		if(highFloors)params.append("communalservicesincluded", highFloors);
		if(brandNew)params.append("animalsallowed", brandNew);

		history.push("/search?" + params);
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
						<input type="number" className="form-control" placeholder="ROOMS" onChange={event => setRooms(event.target.value)} />
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
				<div className="formSecondary p-3">
					<div className="form-row align-items-end">
						{checkbox("Mountain View"	, setMountainView)}
						{checkbox("Communal Services Included", setCommunalService)}
						{checkbox("Animals Allowed"	, setAnimalsAllowed)}
					</div>
					<div className="form-row align-items-end">
						{checkbox("Nearby Park(s)"	, setNearbyPark)}
						{checkbox("Balcony"			, setBalcony)}
						{checkbox("Central Heating"	, setCentralHeating)}
					</div>
					<div className="form-row align-items-end pb-0">
						{checkbox("Low Floors (1-6)", setLowFloors	,"mb-0")}
						{checkbox("High Floors (7+)", setHighFloors	,"mb-0")}
						{checkbox("Brand New"		, setBrandNew	,"mb-0")}
					</div>
				</div>
				<button className="btn btn-dark mt-3">Search</button>
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