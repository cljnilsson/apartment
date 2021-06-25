import React, { useContext } from "react";
import GlobalContext from "./Contexts/GlobalContext";

function Footer() {
	let context = useContext(GlobalContext);
	console.log("RENDERING FOOTER:  " + !context.loading)

	if(context.loading) return <></>;

	return <>
		<footer>
			<div className="container mt-3">
				<div className="row">
					<div className="col-3 text-center">
						<h3 className="m-0">SOMESITE.COM</h3>
						<small>Some catchy slogan</small><br/>
						<i className="fab fa-instagram fa-3x mx-1"></i>
						<i className="fab fa-facebook fa-3x mx-1"></i>
						<i className="fab fa-whatsapp fa-3x mx-1"></i>
						<i className="fab fa-telegram fa-3x mx-1"></i>
					</div>
					<div className="col-3">
						<h5></h5>PROPERTY TYPES
						<ul>
							<li>Apartment</li>
							<li>Penthouse</li>
							<li>Apartment in the Club house</li>
							<li>House</li>
							<li>House in a gated town</li>
							<li>Office space</li>
						</ul>
					</div>
					<div className="col-2">
						<h5>Help</h5>
						<ul>
							<li>Provided services</li>
							<li>Cooperation</li>
							<li>Documents</li>
							<li>Useful information</li>
						</ul>
					</div>
					<div className="col">
						<h5>Contacts</h5>
						<ul>
							<li><i className="fas fa-map-marker-alt"></i> Office 304, 119 Gorky alley, Bishkek</li>
							<li><i className="fas fa-phone"></i> 0536-221-081</li>
							<li><i className="far fa-envelope"></i> coolcompany@gmail.com</li>
							<li><i className="far fa-clock"></i> Day and night</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</>;
}
   

export default Footer;
