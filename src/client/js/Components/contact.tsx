import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Contact() {
	return <>
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item active" aria-current="page">Contact</li>
			</ol>
		</nav>
		
		<div className="row h-100">
			<div className="col">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996128.7089146362!2d48.537200115807785!3d29.477368076122172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d93c5b816b1%3A0x53be187ef044034f!2sSalmiya%20Indian%20SALOON.%20JISAN!5e0!3m2!1sen!2sse!4v1621318471979!5m2!1sen!2sse" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
			</div>
			<div className="col">
				<h2 className="py-4">Contact form</h2>
				<form>
					<div id="contactform" className="form-group">
						<input type="text" className="form-control" placeholder="Name" />
						<input type="email" className="form-control my-3" placeholder="Email" />
						<textarea rows="4" className="form-control" placeholder="My message" />
						<button className="btn btn-dark mt-3">Send</button>
					</div>
				</form>
			</div>
		</div>
	</>;
}
   

export default Contact;