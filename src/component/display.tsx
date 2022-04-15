import { useState, useEffect } from "react";
import data from "../data/sneakers_data.json";
import "../style/display.css";

type Sneakers = {
	id: string;
	name: string;
	img: { preview: string }[];
	info: {
		company: string;
		name: string;
		description: string;
		price: number;
		deal: number;
	};
};
type PrevImages = { display: string; preview: string }[];

function Display() {
	const [Images, setImages] = useState("");
	const [PrvImages, setPrvImages]: any[] = useState([]);

	const [Data, setData] = useState<Sneakers | undefined>();
	useEffect(() => {
		//Data = data;
		setData(data);
		setImages(data?.img?.[0]?.preview);
	}, [Data]);

	function changeDisplay(src: string) {
		setImages(src);
	}

	return (
		<div className='main_img_container'>
			<img src={Images} className='main_img' />
			<div className='preview_img_container'>
				{Data?.img?.map((data, index) => {
					let prvClass = "preview_imags" + index;
					return (
						<img
							onClick={() => changeDisplay(data.preview)}
							key={index}
							src={data.preview}
							className={prvClass}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Display;
