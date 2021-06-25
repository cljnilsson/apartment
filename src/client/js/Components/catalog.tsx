import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Type {
	id: string;
	name: string;

	constructor(i: string, n : string) {
		this.id = i;
		this.name = n;
	}
}

function Catalog() {
	let firstRow  = [new Type("1", "APARTMENT")	, new Type("2", "PENTHOUSE"), new Type("3", "CLUB-HOUSE")];
	let secondRow = [new Type("4", "HOUSE")		, new Type("5", "Cottage")	, new Type("6", "OFFICE")];

	function row(arr: Array<Type>) {
		return (
			<div className="row">
				{arr.map((v) => <div className="col-md-4 text-center"><Link to={"/catalog/quicksearch/" + v.name.toLowerCase()}><img className="img-fluid" src={"/cat-" + v.id +".jpg"}/></Link><h5>{v.name}</h5></div>)}
			</div>
		);
	}

	return <>
		<div className="text-center py-6">
			<small className="text-muted">QUICK SEARCH</small>
			<h1>OPTIONS</h1>
		</div>
		<div className="pb-6">
			{row(firstRow)}
			{row(secondRow)}
		</div>
	</>;
}
   

export default Catalog;