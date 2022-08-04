import "./style/main.css";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";

function RoutHandler() {
	const routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/Collection", element: <Collection /> },
		{ path: "/Men", element: <Men /> },
		{ path: "/Women", element: <Women /> },
		{ path: "/About", element: <About /> },
		{ path: "Contact", element: <Contact /> },
	]);
	return routes;
}

export default RoutHandler;
