import { useState, useEffect } from "react";
import data from "../data/sneakers_data.json";

import { ReactComponent as CartIcon } from "../images/icon-cart.svg";

import "../style/itemInfo.css";

type Sneakers = {
	company: string;
	name: string;
	description: string;
	price: number;
	deal: number;
};

function ItemInfo() {
	const [Info, setInfo] = useState<Sneakers | undefined>();
	const [CurrentPrice, setCurrentPrice] = useState("Unavailable");
	const [Quantity, setQuantity] = useState(0);
	const [Deal, setDeal] = useState("");
	const [Price, setPrice] = useState("");

	useEffect(() => {
		setInfo(data.info);
		if (Info !== undefined) {
			setCurrentPrice(("$" + (Info.price * Info.deal).toFixed(2)).toString());
			setDeal(100 * Info.deal + "%");
			setPrice(Info.deal !== 1 ? "$" + Info.price.toFixed(2) : "");
		}
	}, [Info, CurrentPrice, Deal, Price]);

	function changeDisplay(src: string) {}

	return (
		<div className='info_container'>
			<div className='company'>{Info?.company}</div>
			<div className='name'>{Info?.name}</div>
			<div className='description'>{Info?.description}</div>
			<div className='prices_container'>
				<div className='current_price'>{CurrentPrice}</div>
				<div className='deal'>{Deal}</div>
				<div className='price'>{Price}</div>
			</div>
			<div className='action_container'>
				<div className='quantity_container'>
					<div className='quantity_minus'>-</div>
					<div className='quantity'>Quantity</div>
					<div className='quantity_plus'>+</div>
				</div>
				<div className='btn_add_cart'>
					<CartIcon />
					Add to cart
				</div>
			</div>
		</div>
	);
}

export default ItemInfo;
