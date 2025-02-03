import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Container from "./container";
import Navbar	from "./navBar";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Container/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
