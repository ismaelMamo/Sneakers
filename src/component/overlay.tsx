import { useEffect } from "react";

import "../style/overlay.css";
import left from "../images/icon-previous.svg";
import right from "../images/icon-next.svg";

type imageCarousel = {
	url: string;
	func: (params: string) => string;
	active: string;
};

function Overlay({ url, func, active }: imageCarousel) {
	useEffect(() => {
		let element = document.getElementById("popup_container")!;
		if (active === "off") {
			element.classList.add("hide");
		} else {
			element.classList.remove("hide");
		}
	}, [active]);

	return (
		<div id='popup_container' className='popup_container'>
			<div className='closer' onClick={() => func("close")}>
				&times;
			</div>

			<div className='main_body_container'>
				<img
					className='left'
					alt='left'
					src={left}
					onClick={() => func("left")}
				/>

				<div className='image_container'>
					<img className='image' src={url} alt='Shoes' />
				</div>

				<img
					className='right'
					alt='right'
					src={right}
					onClick={() => func("right")}
				/>
			</div>
			<div className='overlay'></div>
		</div>
	);
}
export default Overlay;
