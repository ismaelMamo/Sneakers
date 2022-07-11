import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/show.css";
import "./style/main.css";

import NavigationBar from "./components/navigationBar";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Burger from "./components/burger";

function Router() {
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
		<div id='all_container'>
			<NavigationBar func={menuClickHandler} data='' />
			<Burger />
			<div id='home_body_container' className='outer_home_body_container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/show' element={<Show />} />
					<Route path='/about' element={<About />} />
					<Route path='/collection' element={<Collection />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/men' element={<Men />} />
					<Route path='/women' element={<Women />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</div>
	);
}

export default Router;
