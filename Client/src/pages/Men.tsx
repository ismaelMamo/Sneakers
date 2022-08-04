//import { useState, useEffect } from "react";
import SneakersCard from "../components/sneakersCard";
import { Link } from "react-router-dom";
import "../style/menWoman.css";
import data from "../data/shoesList_men_data.json";

function Men() {
	return (
		<div className='main_container'>
			<div className='left_section'></div>
			<div className='right_section'>
				{data.map((element, index) => {
					return (
						<div key={element.id} className='SneakersCard_container'>
							<Link
								className='card_Link'
								to={`/show?id=${element.id}&category=men`}
							>
								<SneakersCard
									price={element.price}
									rating={parseFloat(element.rating)}
									img={element.imgUrl}
									starSize='medium'
									promo={element.promotion}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Men;

// https://unsplash.com/@ryancp
//https://unsplash.com/@usama_1248
