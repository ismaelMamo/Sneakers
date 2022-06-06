import { useState } from "react";

import "../style/overlay.css";
import left from "../images/icon-previous.svg";
import right from "../images/icon-next.svg";

interface imageCarousel {
	url: string;
	func: (params: string) => string;
}

function Overlay({ url, func }: imageCarousel) {
	return (
		<div className='popup_container'>
			<div>&times;</div>

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
