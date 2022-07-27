import { useState, useEffect } from "react";
import SneakersCard from "../components/sneakersCard";
import data from "../data/shoesList_men_data.json";
import { Link } from "react-router-dom";
import "../style/promoted.css";
type Data = {
	text: string;
	ids: string[];
};
type Sneakers = {
	price: string;
	rating: string;
	imgUrl: string;
	promotion: string;
	id: string;
};

function Promoted({ text, ids }: Data) {
	const [Load, setLoad] = useState(true);
	const [DisplayData, setDisplayData] = useState([
		{
			price: "",
			rating: "",
			imgUrl: "",
			promotion: "",
			id: "",
		},
		{
			price: "",
			rating: "",
			imgUrl: "",
			promotion: "",
			id: "",
		},
	]);

	useEffect(() => {
		let temp: Sneakers[] = [];
		data.forEach((element, index) => {
			if (element.id === ids[0]) {
				temp.push({
					price: element.price,
					rating: element.rating,
					imgUrl: element.imgUrl,
					promotion: element.promotion,
					id: element.id,
				});
			} else if (element.id === ids[1]) {
				temp.push({
					price: element.price,
					rating: element.rating,
					imgUrl: element.imgUrl,
					promotion: element.promotion,
					id: element.id,
				});
			}
		});
		setDisplayData(temp);
		setLoad(false);
	}, [ids]);

	return (
		<div id='promoted_container'>
			<div id='type_container'>
				<div id='type_text'>{text}</div>
				<div id='type_decoration'></div>
			</div>
			<div id='sample_container'>
				<div className='sample'>
					{Load ? (
						<div>Loading</div>
					) : (
						<div className='promoted_img'>
							<Link
								className='card_Link'
								to={`/show?id=${DisplayData[0].id}&category=men`}
							>
								<SneakersCard
									price={DisplayData[0].price}
									rating={parseFloat(DisplayData[0].rating)}
									img={DisplayData[0].imgUrl}
									starSize='medium'
									promo={DisplayData[0].promotion}
								/>
							</Link>
						</div>
					)}
				</div>
				<div className='sample'>
					{Load ? (
						<div>Loading</div>
					) : (
						<div className='promoted_img'>
							<Link
								className='card_Link'
								to={`/show?id=${DisplayData[1].id}&category=men`}
							>
								<SneakersCard
									price={DisplayData[1].price}
									rating={parseFloat(DisplayData[1].rating)}
									img={DisplayData[1].imgUrl}
									starSize='medium'
									promo={DisplayData[1].promotion}
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
export default Promoted;
