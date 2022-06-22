import SneakersCard from "../component/sneakersCard";
import "../style/menWoman.css";
import data from "../data/shoesList_female_data.json";

function Women() {
	return (
		<div className='main_container'>
			<div className='left_section'></div>
			<div className='right_section'>
				{data.map((element, index) => {
					return (
						<div key={element.id} className='SneakersCard_container'>
							<SneakersCard
								price={element.price}
								rating={parseFloat(element.rating)}
								img={element.imgUrl}
								starSize='medium'
								promo={element.promotion}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Women;
