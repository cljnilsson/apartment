import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loading from "../svgs/Loading";
import Get from "../../Libs/Request";
import GlobalContext from "../Contexts/GlobalContext";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";



function range(n : number) {
	// Array.range(5) --> [0,1,2,3,4]
	return Array.apply(null,Array(n)).map((x,i) => i)
};

Object.defineProperty(Array.prototype, "chunk", {
	value: function(n) {
	  return range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));
  
	}
});

interface iProps {
	cache: string,
	url: string
}

function Listing(props: iProps) {
	let context = useContext(GlobalContext);

	console.log(context)

	//const { status, error, data } = Get("allapartments", "/api/apartments");
    const { status, error, data } = Get(props.cache, props.url);

	if (status === "loading") {
		context.setLoading(true);
		return <Loading />
	}

	if (error) return <span>An error has occurred: {error.message}</span>
	context.setLoading(false);

	function split(toSplit, chunkSize = 3) {
		return toSplit.chunk(chunkSize);
	}

	function acol(c) {
		return (
			<div className="col text-center">
				<img className="apartmentpreview" src={c.images[0].path} />
				<h4>{c.title}</h4>
				<p className="m-0 border-top">{c.buildingtype}, {c.area}</p>
				<p className="m-0">{c.price}/month</p>
				<p className="m-0">{c.size} sqft</p>
				<a href={"/apartments/" + c.id}><button className="btn btn-outline-dark mt-2">Read More</button></a>
			</div>
		);
	}

	function arow(r) {
		return r.map((c) => acol(c));
	}

	function apartments() {
		let toReturn = [];

		let arranged = split(data);

		for(let r of arranged) {
			toReturn.push(<div className="row mb-3">{arow(r)}</div>);
		}

		return toReturn;
	}

	return <>
		<div className="pt-3">{apartments()}</div>
	</>;
}
   

export default Listing;