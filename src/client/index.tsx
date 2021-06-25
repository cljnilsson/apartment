import React 		from "react";
import ReactDOM 	from "react-dom";
import App 			from "./js/Components/Main";
import "./css/main.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./public/hero-3.png";

import "./public/cat-1.jpg";
import "./public/cat-2.jpg";
import "./public/cat-3.jpg";
import "./public/cat-4.jpg";
import "./public/cat-5.jpg";
import "./public/cat-6.jpg";

import "./public/avatar.jpg";

import "./public/loading.svg";

let r = <App/>;
let element = document.getElementById("root");

ReactDOM.render(r, element);