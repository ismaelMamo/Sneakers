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
	}, [CarouselArr]);

	useEffect(() => {
		let word: any = setTimeout(() => {});
		let letter: any = setTimeout(() => {});
		let element = document.getElementById("hero_imgs_mapper")!;
		if (CarouselIndex > CarouselArr.length - 1) {
			console.log("if");
			word = setTimeout(() => {
				element.style.transition = `transform 0s`;
				element.style.transform = `translateY(-100%)`;
				setCarouselIndex(2);
			}, 1000);
		} else {
			letter = setTimeout(() => {
				setCarouselIndex(CarouselIndex + 1);

				element.style.transform = `translateY(-${CarouselIndex * 100}%)`;
				element.style.transition = `transform 1s`;
			}, 3000);
		}
		return () => {
			clearTimeout(letter);
			clearTimeout(word);
		};
	}, [CarouselIndex, CarouselArr]);

	return (
		<div id='hero_container'>
			<div id='hero_imgs'>
				<div id='hero_imgs_mapper'>
					{!Loading
						? CarouselArr.map((element, index) => {
								return (
									<img
										alt={`shoe ${index}`}
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
