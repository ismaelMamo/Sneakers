import { useState, useEffect } from "react";
import data from "../data/sneakers_data.json";
import "../style/display.css";

type Sneakers = {
	id: string;
	name: string;
	img: { display: string; preview: string }[];
}[];
type PrevImages = { display: string; preview: string }[];

function Display() {
	const [Images, setImages] = useState("../images/image-product-1.jpg");
	const [PrvImages, setPrvImages]: any[] = useState([]);

	let Data: Sneakers = [];
	useEffect(() => {
		Data = data;
		//Should retrieve already formate data
		// let temp: PrevImages = Data[0].img;
		// temp.forEach((element) => {
		// 	setPrvImages(...PrvImages, require(element.preview.toString()));
		// 	console.log(require(element.preview));
		// });
		// console.log(PrvImages);
	}, [Images, setPrvImages]);

	return (
		<div className='display_container'>
			<div className='main_img_container'>
				<img src={`Images`.toString()} className='main_img' />
			</div>
			<div>
				{/* {Data[0].img.map((data) => {
					console.log(data.preview);
					return <img src={data.preview} />;
				})} */}
			</div>
			<div className='preview_img'></div>
		</div>
	);
}

export default Display;
