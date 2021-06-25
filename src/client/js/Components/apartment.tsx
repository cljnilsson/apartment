import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "./svgs/Loading";
import Get from "../Libs/Request";
import {Carousel} from "react-bootstrap";

import GlobalContext from "./Contexts/GlobalContext";

function Apartment() {
	function infopairToHtml(description: string, value: string) {
		return (<div className="row">
			<div className="col-1">
				{description}:
			</div>
			<div className="col">
				{value}
			</div>
		</div>);
	}

	let context = useContext(GlobalContext);

	let { id } = useParams();

	const { status, error, data } = Get("allapartments", "/api/apartments/" + id);

	if (status === "loading")  {
		context.setLoading(true);
		return <>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="/">Home</a></li>
					<li className="breadcrumb-item"><a href="#">Catalog</a></li>
				</ol>
			</nav>
			<Loading />
		</>
	}

	if (error) return <span>An error has occurred: {error.message}</span>
	context.setLoading(false);

	console.log(data);

	return <>
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item"><a href="/catalog">Catalog</a></li>
				<li className="breadcrumb-item active" aria-current="page">{data.buildingtype}</li>
			</ol>
		</nav>
		<h4>{data.title}</h4>
		<Carousel>
			{data.images.map((i) => <Carousel.Item><img className="apartmentImage" src={i.path} /></Carousel.Item>)}
		</Carousel>
		<p>{data.description}</p>
		<div className="text-center">
			<button className="btn btn-dark mx-1 my-2"><i className="fas fa-phone-volume"></i> Call</button>
			<button className="btn btn-dark mx-1 my-2"><i className="fab fa-whatsapp"></i> WhatsApp</button>
		</div>
		<div className="border">
			{infopairToHtml("Type", data.buildingtype)}
			{infopairToHtml("Location", data.area)}
			{infopairToHtml("Price", data.price)}
			{infopairToHtml("Size", data.size)}
			{infopairToHtml("Rooms", data.rooms)}
			{infopairToHtml("Floor", data.floor)}
			{infopairToHtml("Bedroom", data.bedroom)}
			{infopairToHtml("Bathroom", data.bathroom)}
			{infopairToHtml("Other", "some hand made note, implement this later")}
		</div>
	</>;
}
   

export default Apartment;
