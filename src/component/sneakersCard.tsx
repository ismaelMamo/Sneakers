import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "../style/sneakersCards.css";

type cardSetting = {
	price: string;
	rating: number;
	img: string;
	promo: string;
	starSize: "small" | "medium" | "large" | undefined;
};

function SneakersCard({ price, rating, img, promo, starSize }: cardSetting) {
	const [Promo, setPromo] = useState(promo);
	const [PromoState, setPromoState] = useState("none");
	useEffect(() => {
		let element = document.getElementById("offer")!;
		console.log("in");
		if (promo === "none") {
			element.classList.add("hide");
		} else {
			element.classList.remove("hide");
		}
	});

	return (
		<div className='card_main_container'>
			<div className='upper_section_container'>
				<img className='card_img' src={img} />
				<div className='card_info_container'>
					<div className='preview_price'>${price}</div>
					<div id='offer' className='offer'>
						{Promo}
					</div>
				</div>
			</div>
			<div className='star_Rating'>
				<Box>
					<Rating
						className='star'
						name='sneakers_rating'
						value={rating}
						size={starSize}
						readOnly
						precision={0.5}
					/>
				</Box>
			</div>
		</div>
	);
}
export default SneakersCard;
