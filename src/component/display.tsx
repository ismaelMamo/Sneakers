import { useState } from "react";
import "../style/display.css";

function Display() {
	const [Images, setImages] = useState("");
	return (
		<div className='display_container'>
			<div className='main_img_container'>
				<img className='main_img' />
			</div>
			<div className='preview_img'></div>
		</div>
	);
}

export default Display;
