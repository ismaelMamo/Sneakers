import { useState, useEffect } from "react";
import "../style/carousel.css";

type carouselImg = {
	data: string[];
};

function Carousel({ data }: carouselImg) {
	const [CarouselIndex, setCarouselIndex] = useState(2);
	const [CarouselArr, setCarouselArr] = useState(data);
	const [Loading, setLoading] = useState(true);
	useEffect(() => {
		let tempArr = CarouselArr;
		tempArr.push(tempArr[0]);
		tempArr.unshift(tempArr[tempArr.length - 2]);
		setCarouselArr(tempArr);
		setLoading(false);
	}, []);

	useEffect(() => {
		Tick();
	}, [CarouselIndex]);

	function Tick() {
		let element = document.getElementById("hero_imgs_mapper")!;
		if (CarouselIndex > CarouselArr.length - 1) {
			setCarouselIndex(2);
			setTimeout(() => {
				element.style.transition = `all 0s`;
				element.style.transform = `translateY(-100%)`;
			}, 500);
		} else {
			setTimeout(() => {
				setCarouselIndex(CarouselIndex + 1);

				element.style.transform = `translateY(-${CarouselIndex * 100}%)`;
				element.style.transition = `all 0.5s`;
			}, 3000);
		}
	}
	return (
		<div id='hero_container'>
			<div id='hero_imgs'>
				<div id='hero_imgs_mapper'>
					{!Loading
						? CarouselArr.map((element, index) => {
								return (
									<img
										key={index}
										id={`carousel_${index}_img`}
										className='carousel_img'
										src={element}
									/>
								);
						  })
						: "loading"}
				</div>
			</div>
			<div id='hero_imgs_paging'></div>
		</div>
	);
}

export default Carousel;
