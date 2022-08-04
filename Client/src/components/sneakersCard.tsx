import { useEffect } from "react";
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
	useEffect(() => {
		let element = document.getElementById("offer")!;
		if (promo === "none") {
			element.classList.add("hide");
		} else {
			element.classList.remove("hide");
		}
	});

	return (
		<div className='card_main_container'>
			<div className='upper_section_container'>
				<img alt='shoes preview' className='card_img' src={img} />
				<div className='card_info_container'>
					<div className='preview_price'>
						<div className='price_text'>${price}</div>
					</div>
					<div id='offer' className='offer'>
						<div className='offer_text'>{promo}</div>
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
