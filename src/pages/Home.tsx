import { useState } from "react";
import up_divider from "../images/up_divider.png";
import down_divider from "../images/down_divider.png";
import "../style/home.css";

import Display from "../components/display";
import ItemInfo from "../components/itemInfo";
import Overlay from "../components/overlay";
import data from "../data/sneakers_data.json";

function Home() {
	return (
		<div className='home_container'>
			<div id='hero_container'>
				<div id='hero_imgs'>
					<img
						id='carousel_1_img'
						src='https://cms-static.asics.com/media-libraries/54842/file.jpg?1612484303015?'
					/>
				</div>
				<div id='hero_welcome_text'></div>
				<div id='hero_imgs_paging'></div>
			</div>
			<div>
				<div id='home_body_1'></div>
				<div id='home_body_2'>
					<img id='up_divider' src={up_divider} />
					<div id='sub_home_body_2'>Sneakers</div>
					<img id='down_divider' src={down_divider} />
				</div>
			</div>
		</div>
	);
}

export default Home;
