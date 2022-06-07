import { useState } from "react";
import "../style/home.css";

import Display from "../component/display";
import ItemInfo from "../component/itemInfo";
import Overlay from "../component/overlay";
import data from "../data/sneakers_data.json";

function Home() {
	//future tracking use
	//const page: string = "";
	function navigate(params: string) {}
	const [PopupUrl, setPopupUrl] = useState("");
	const [PopupUrlIndex, setPopupUrlIndex] = useState(0);
	const [OverlayState, setOverlayState] = useState("off");

	function currentDisplay(params: number): void {
		setPopupUrlIndex(params);
		setPopupUrl(data?.img[params]?.preview);
		setOverlayState("on");
	}

	function rotatePopup(params: string) {
		let url = "";
		if (params === "left") {
			if (PopupUrlIndex > 0) {
				setPopupUrl(data?.img[PopupUrlIndex - 1]?.preview);
				setPopupUrlIndex(PopupUrlIndex - 1);
			} else {
				setPopupUrl(data?.img[data.img.length - 1]?.preview);
				setPopupUrlIndex(data.img.length - 1);
			}
		} else if (params === "right") {
			if (PopupUrlIndex < data.img.length - 1) {
				setPopupUrl(data?.img[PopupUrlIndex + 1]?.preview);
				setPopupUrlIndex(PopupUrlIndex + 1);
			} else {
				setPopupUrlIndex(0);
				setPopupUrl(data?.img[0]?.preview);
			}
		} else {
			setOverlayState("off");
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
			<Overlay func={rotatePopup} url={PopupUrl} active={OverlayState} />
		</div>
	);
}

export default Home;
