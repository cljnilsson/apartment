import React, { InputHTMLAttributes, useContext, useState } from "react";
import {Post} from "../Libs/Request";

import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

function Advertisement() {
	//const { status, error, data } = Get("allapartments", "/api/apartments");
	const [ad, setAd] = useState("");
	const hiddenbodyref = React.createRef<HTMLInputElement>();

	function submit() {
		hiddenbodyref.current.value = ad;
	}

	function onEditorChange(state) {
		let context = state;

		setAd(draftToHtml(context))
	}

	function checkbox(label : string, extraClasses : string = "") {
		let name = label.toLowerCase().replace( /\s/g, "");
		if(name.indexOf("(") > 0) {
			name = name.substr(0, name.indexOf("("));
		}

		return(
			<div className={"form-group col-md-4 " + extraClasses}>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" name={name}/>
					<label className="form-check-label">{label}</label>
				</div>
			</div>
		);
	}

	function search() {
		return (
		<div className="my-3 mx-auto w-75">
			<form className="p-3" method="post" onSubmit={submit}>
				<div className="form-row align-items-end">
					<div className="form-group col-md-4">
						<label>PROPERTY TYPE</label>
						<select className="form-control" name="propertytype">
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
						<select className="form-control" name="location">
							<option>City Center</option>
							<option>Downtown</option>
							<option>Erkindik Boulevard</option>
							<option>Dordoi Plaza</option>
							<option>VEFA center</option>
							<option>SOuthern Bishkek</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<input type="text" className="form-control" placeholder="ROOMS" name="rooms" required />
					</div>
				</div>
				<div className="form-row align-items-end">
					<div className="form-group col-md-8">
						<input type="text" className="form-control" placeholder="Title" name="title" required/>
					</div>
					<div className="form-group col-md-2">
						<input type="number" className="form-control" placeholder="Price (USD)" name="price" required />
					</div>
					<div className="form-group col-md-2">
						<input type="number" className="form-control" placeholder="Area (Sqft)" name="area" required />
					</div>
				</div>
				<div className="formSecondary p-3">
					<div className="form-row align-items-end">
						{checkbox("Mountain View")}
						{checkbox("Communal Services Included")}
						{checkbox("Animals Allowed")}
					</div>
					<div className="form-row align-items-end">
						{checkbox("Nearby Park(s)")}
						{checkbox("Balcony")}
						{checkbox("Central Heating")}
					</div>
					<div className="form-row align-items-end pb-0">
						{checkbox("Low Floors (1-6)", "mb-0")}
						{checkbox("High Floors (7+)", "mb-0")}
						{checkbox("Brand New"		, "mb-0")}
					</div>
				</div>
				<div className="form-row align-items-end my-3">
					<label>Image(s)</label>
					<input type="file" className="form-control-file" multiple />
					<small className="form-text">You can hold down CTRL or SHIFT to select multiple images.</small>
				</div>
				<div className="form-row align-items-end">
					<Editor
						//editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="bg-light"
						onChange={onEditorChange}

						editorStyle={{ 
							border: "1px solid",
							minHeight: "200px"
						}}
					/>
					<input id="adbody" name="ad" ref={hiddenbodyref} type="text" hidden />
				</div>
				<input type="submit" className="btn btn-dark mt-3" value="submit" />
			</form>
		</div>);
	}

	return <div>
		<div className="py-5">{search()}</div>
	</div>;
}
   

export default Advertisement;