import "./style/main.css";
import RoutHandler from "./RoutHandler";
import NavigationBar from "./component/navigationBar";
import "./style/home.css";

function App() {
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
		<>
			<NavigationBar func={menuClickHandler} data='Home' />
			<RoutHandler />;
		</>
	);
}

export default App;
