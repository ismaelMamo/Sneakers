import "../style/home.css";

import NavigationBar from "../component/navigationBar";
import Display from "../component/display";
import ItemInfo from "../component/itemInfo";

function Home() {
	//future tracking use
	//const page: string = "";

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
	function navigate(params: string) {}

	return (
		<div className='home_container'>
			<NavigationBar func={menuClickHandler} data='Home' />
			<div>
				<div id='side_menu' className='side_menu'>
					<ul className='nav_menu'>
						<li
							onClick={() => navigate("Collection")}
							id='Collection'
							className='Collection'
						>
							Collection
						</li>
						<li onClick={() => navigate("Men")} id='Men' className='Men'>
							Men
						</li>
						<li onClick={() => navigate("Women")} id='Women' className='Women'>
							Women
						</li>
						<li onClick={() => navigate("About")} id='About' className='About'>
							About
						</li>
						<li
							onClick={() => navigate("Contact")}
							id='Contact'
							className='Contact'
						>
							Contact
						</li>
					</ul>
				</div>
			</div>
			<div id='home_body_container' className='home_body_container'>
				<div className='left_display'>
					<Display />
				</div>
				<div className='right_display'>
					<ItemInfo />
				</div>
			</div>
		</div>
	);
}

export default Home;
