import { useState, useEffect } from "react";
import "../style/home.css";

import NavigationBar from "../component/navigationBar";
import Display from "../component/display";

function Home() {
	const page: string = "";

	function menuClickHandler(params: boolean) {
		let blurElement = document.getElementById("home_body_container")!;
		let menuElement = document.getElementById("side_menu")!;
		if (params) {
			blurElement.classList.remove("active");
			menuElement.classList.remove("active");
		} else {
			blurElement.classList.add("active");
			menuElement.classList.add("active");
		}
	}

	return (
		<div className='home_container'>
			<NavigationBar func={menuClickHandler} data='Home' />
			<div>
				<div id='side_menu' className='side_menu'></div>
			</div>
			<div id='home_body_container' className='home_body_container'>
				<Display />
			</div>
		</div>
	);
}

export default Home;
