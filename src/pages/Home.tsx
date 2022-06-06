import { useState, useEffect } from "react";
import "../style/home.css";

import Display from "../component/display";
import ItemInfo from "../component/itemInfo";
import Overlay from "../component/overlay";
import data from "../data/sneakers_data.json";

type Sneakers = {
	id: string;
	name: string;
	img: { preview: string }[];
	info: {
		company: string;
		name: string;
		description: string;
		price: number;
		deal: number;
	};

	popFunc: (params: number) => void;
};
type popFunc = { func: (params: number) => void };

function Home() {
	//future tracking use
	//const page: string = "";
	function navigate(params: string) {}
	const [InitialPopupUrl, setInitialPopupUrl] = useState("");

	function currentDisplay(params: number): void {
		console.log(data?.img[params]?.preview);

		setInitialPopupUrl(data?.img[params]?.preview);
	}

	function rotatePopup(params: string) {
		let url = "";
		if (params == "left") {
		}
		url = data?.img?.[0]?.preview;
		return url;
	}

	return (
		<div className='home_container'>
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
					<Display imageSrc={data} popup={currentDisplay} />
				</div>
				<div className='right_display'>
					<ItemInfo />
				</div>
			</div>
			<Overlay func={rotatePopup} url={InitialPopupUrl} />
		</div>
	);
}

export default Home;
