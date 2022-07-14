import { useState } from "react";
import up_divider from "../images/up_divider.png";
import down_divider from "../images/down_divider.png";
import FlipText from "../components/flipText";
import "../style/home.css";

import Carousel from "../components/carousel";
function Home() {
	return (
		<div className='home_container'>
			<Carousel
				data={[
					"https://cms-static.asics.com/media-libraries/54842/file.jpg?1612484303015?",
					"https://cdna.artstation.com/p/assets/images/images/047/520/028/large/rahul-chandra-nike-show.jpg?1647799767",
					"https://ca-cdn.runningroom.com/pub/media/catalog/category/m-shoes_banner-S2021.jpg",
				]}
			/>
			<FlipText
				data={[
					["W", "E", "L", "L", "C", "O", "M", "E"],
					["T", "O"],
					["S", "N", "E", "A", "K", "E", "R", "S"],
				]}
			/>
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
