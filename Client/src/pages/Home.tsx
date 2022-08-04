import { useEffect } from "react";
import up_divider from "../images/up_divider.png";
import down_divider from "../images/down_divider.png";
import FlipText from "../components/flipText";
import ScrollTopBtn from "../components/scrollTopBtn";
import MissionCards from "../components/missionCards";
import Promoted from "../components/promoted";
import OurBrands from "../components/ourBrands";
import "../style/home.css";

import Carousel from "../components/carousel";
function Home() {
	useEffect(() => {
		window.addEventListener("scroll", scroll_1_event_down);
		return () => {
			window.removeEventListener("scroll", scroll_1_event_down);
			window.removeEventListener("scroll", scroll_1_event_up);
		};
	});

	function scroll_1_event_down() {
		if (window.pageYOffset > 400) {
			const element = document.getElementById("scroll_btn")!;
			window.removeEventListener("scroll", scroll_1_event_down);
			window.addEventListener("scroll", scroll_1_event_up);
			element.classList.remove("hidden");
		}
	}
	function scroll_1_event_up() {
		if (window.pageYOffset < 100) {
			const element = document.getElementById("scroll_btn")!;
			window.removeEventListener("scroll", scroll_1_event_up);
			window.addEventListener("scroll", scroll_1_event_down);
			element.classList.add("hidden");
		}
	}

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
					["W", "E", "L", "C", "O", "M", "E"],
					["T", "O"],
					["S", "N", "E", "A", "K", "E", "R", "S"],
				]}
			/>
			<div id='home_body_containers'>
				<MissionCards />
				<div id='home_body_1'>
					<Promoted text="Best Seller Men's" ids={["2", "4"]} />
				</div>
				<div id='home_body_2'>
					<img id='up_divider' alt='' src={up_divider} />
					<div id='sub_home_body_2'>
						<OurBrands />
					</div>
					<img id='down_divider' alt='' src={down_divider} />
				</div>
			</div>
			<ScrollTopBtn />
		</div>
	);
}

export default Home;
