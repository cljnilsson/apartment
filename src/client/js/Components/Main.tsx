import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Index 			from "./index";
import Apartment 		from "./apartment";
import Catalog 			from "./catalog";
import About 			from "./about";
import Contact 			from "./contact";
import Advertisement 	from "./advertisement";
import Category 		from "./category";
import Footer 			from "./footer";

import GlobalContext 	from "./Contexts/GlobalContext";

function App() {
	let ref = React.createRef<HTMLDivElement>();

	let [loading, setLoading] = useState(false);

	let state = { // Callback to actual state to force a re-render when certain variables change
		loading		: loading,
		setLoading	: (b: boolean) => setLoading(b)
	};

	return <>
		<GlobalContext.Provider value={state}>
			<div className="container" ref={ref}>
				<Router>
					<Switch>
						<Route exact path="/"><Index/></Route>
						<Route exact path="/apartments/:id"><Apartment/></Route>
						<Route exact path="/catalog"><Catalog/></Route>
						<Route exact path="/catalog/quicksearch/:category"><Category/></Route>
						<Route exact path="/about"><About/></Route>
						<Route exact path="/contact"><Contact/></Route>
						<Route exact path="/createadvertisement"><Advertisement/></Route>
					</Switch>
				</Router>
			</div>
			{window.location.pathname !== "/createadvertisement" ? <Footer /> : null} 
		</GlobalContext.Provider>
	</>
}

export default App;
