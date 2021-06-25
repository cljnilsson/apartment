import React, { InputHTMLAttributes, useContext, useState } from "react";
import {Post} from "../Libs/Request";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Advertisement() {
	//const { status, error, data } = Get("allapartments", "/api/apartments");



	function search() {
		return (
		<div className="my-3 mx-auto w-75">
			<form className="p-3" method="post">
				<div className="form-row align-items-end">
					<div className="form-group col-md-4">
						<label>PROPERTY TYPE</label>
						<select className="form-control">
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
						<select className="form-control">
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
						<label>Price (USD)</label>
						<input type="number" className="form-control" required />
					</div>
					<div className="form-group col-md-2">
						<label>Area (Sqft)</label>

						<input type="number" className="form-control" required />
					</div>
					<div className="form-group col-md-8">
						<input type="text" className="form-control" placeholder="Title" />
					</div>
				</div>
				<div className="form-row align-items-end">
					<Editor
						//editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="bg-light"
						//onEditorStateChange={this.onEditorStateChange}
					/>
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