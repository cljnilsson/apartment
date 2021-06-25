import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";

function About() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,

		centerMode: true,
		lazyLoad: "ondemand",
		autoplay: true,
	};

	return <>
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item active" aria-current="page">About</li>
			</ol>
		</nav>
		<h1 className="py-6">Greetings!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum cursus eleifend. Aliquam ullamcorper nulla et eros blandit, auctor lacinia est tincidunt. In porttitor sapien nisl, at scelerisque eros sollicitudin eget. Sed interdum tortor quam, ac tristique arcu tempus et. Pellentesque non elit ut diam congue cursus quis vitae risus. Vestibulum accumsan metus sit amet dolor pharetra tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce risus odio, semper auctor nunc vitae, vehicula luctus nisi. Etiam a neque sit amet justo vehicula ornare eu vitae lorem. Sed lobortis laoreet blandit.</p>
		<div className="text-muted text-right no-gutters">
			<p className="mb-0">Thank you for choosing us,</p>
			<p className="mb-0">sincerely yours,</p>
			<p>John Doe</p>
		</div>
		<div className="pt-5 text-center">
			<small className="text-muted">WE ARE TO HELP YOU</small>
			<h1 className="botder-bottom">Our team</h1>
			<div>
        <Slider {...settings}>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Maecenas in nunc eu elit fermentum lobortis. Aliquam sapien justo, scelerisque a elementum vitae, interdum eu risus. In hac habitasse platea dictumst. Aenean iaculis neque non orci consequat viverra. Integer condimentum non velit ac mollis. Sed scelerisque tristique nisi sed lobortis. Sed vehicula in eros in tincidunt.</p>
			</div>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Etiam ac enim ullamcorper, tempus ligula ac, tempor turpis. Nam sollicitudin tristique libero, vitae condimentum nibh auctor ac. Phasellus dictum ante at magna cursus aliquet. Ut risus tortor, mattis eget commodo et, rutrum eu nulla. Aenean mollis dui eu fringilla molestie. Vestibulum ut odio arcu. Etiam quis ipsum ut ligula faucibus placerat non in magna.</p>
			</div>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Phasellus non placerat risus. Mauris vel felis interdum, interdum lorem nec, tristique elit. Pellentesque volutpat justo eget pretium faucibus. Nulla id ipsum sed enim viverra consectetur a a justo. In hac habitasse platea dictumst. Aliquam sodales fermentum justo. Donec sed fringilla massa, et suscipit metus. Nulla facilisi. Duis lacinia lacus vitae mauris facilisis, a mollis turpis dignissim.</p>
			</div>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Vestibulum auctor nulla at lacus venenatis elementum nec sed sem. Donec eget justo purus. Fusce turpis velit, luctus nec turpis sed, gravida pretium velit. Vestibulum accumsan, nulla non dapibus efficitur, nunc justo varius neque, id vestibulum leo lorem eget justo. Mauris magna ex, rutrum et libero in, rutrum suscipit leo.</p>
			</div>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Praesent a dapibus mi. Etiam faucibus massa elit, at sollicitudin odio vestibulum sit amet. Nullam eu tortor sed nunc molestie pharetra. Nullam ut finibus nibh. Curabitur eleifend, nibh a lobortis interdum, turpis est consectetur nunc, vitae iaculis quam nibh et metus. Pellentesque euismod augue ac feugiat euismod. Donec ornare ex eros, a dapibus purus ullamcorper ac.</p>
			</div>
			<div>
				<img src="/avatar.jpg" />
				<h5>Some Name</h5>
				<br/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut mauris ligula. Duis lacinia tortor eros, sit amet condimentum augue placerat ac. Sed at ultrices felis, nec auctor nulla. Proin fringilla, ligula ut mattis viverra, augue augue interdum enim, eget auctor turpis ipsum et enim. Praesent feugiat elit a pretium sodales. Vestibulum dignissim hendrerit dolor at luctus. Integer mollis gravida dapibus.</p>
			</div>
        </Slider>
      </div>
		</div>
	</>;
}
   

export default About;