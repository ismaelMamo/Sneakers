import { useState, useEffect } from "react";
import "../style/show.css";

import Display from "../components/display";
import ItemInfo from "../components/itemInfo";
import Overlay from "../components/overlay";
import Burger from "../components/burger";

type propData = {
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
};

function Show() {
	//future tracking use
	//const page: string = "";
	function navigate(params: string) {}

	const [Data, setData] = useState({
		id: "",
		name: "",
		img: [
			{
				preview: "",
			},
		],
		info: {
			company: "",
			name: "",
			description: "",
			price: 0,
			deal: 0,
		},
	});
	const [Ready, setReady] = useState(false);
	const [PopupUrl, setPopupUrl] = useState("");
	const [PopupUrlIndex, setPopupUrlIndex] = useState(0);
	const [OverlayState, setOverlayState] = useState("off");

	useEffect(() => {
		let id = window.location.href.split("?")[1].split("&")[0].split("=")[1];
		let category = window.location.href
			.split("?")[1]
			.split("&")[1]
			.split("=")[1];

		fetch(" https://api.npoint.io/54b06c0c5f2fbf8bc958", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((propData) => {
				propData.forEach((element: propData) => {
					console.log(element.id + "==" + id);
					if (element.id == id) {
						setData(element);
						console.log("passed");

						setReady(true);
					}
				});
			})
			.catch(console.error);
	}, []);

	function currentDisplay(params: number): void {
		setPopupUrlIndex(params);
		setPopupUrl(Data?.img[params]?.preview);
		setOverlayState("on");
	}

	function rotatePopup(params: string) {
		let url = "";
		if (params === "left") {
			if (PopupUrlIndex > 0) {
				setPopupUrl(Data?.img[PopupUrlIndex - 1]?.preview);
				setPopupUrlIndex(PopupUrlIndex - 1);
			} else {
				setPopupUrl(Data?.img[Data.img.length - 1]?.preview);
				setPopupUrlIndex(Data.img.length - 1);
			}
		} else if (params === "right") {
			if (PopupUrlIndex < Data.img.length - 1) {
				setPopupUrl(Data?.img[PopupUrlIndex + 1]?.preview);
				setPopupUrlIndex(PopupUrlIndex + 1);
			} else {
				setPopupUrlIndex(0);
				setPopupUrl(Data?.img[0]?.preview);
			}
		} else {
			setOverlayState("off");
		}
		url = Data?.img?.[0]?.preview;
		return url;
	}

	return (
		<>
			{Ready ? (
				<div className='home_container'>
					<div id='home_body_container' className='home_body_container'>
						<div className='left_display'>
							<Display imageSrc={Data} popup={currentDisplay} />
						</div>
						<div className='right_display'>
							<ItemInfo all={Data} />
						</div>
					</div>
					<Overlay func={rotatePopup} url={PopupUrl} active={OverlayState} />
				</div>
			) : (
				<div>load</div>
			)}
		</>
	);
}

export default Show;
