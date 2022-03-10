import { useState, useEffect } from "react";
import "../style/home.css";

import NavigationBar from "../component/navigationBar";

function Home() {
	const page: string = "";
	return (
		<div className='home_container'>
			<NavigationBar data='Home' />
		</div>
	);
}

export default Home;
