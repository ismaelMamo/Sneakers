import { useState, useEffect } from "react";
import "../style/display.css";

type Sneakers = {
	imageSrc: {
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
	popup: (params: number) => void;
};

function Display({ imageSrc, popup }: Sneakers) {
	const [Images, setImages] = useState("");
	const [ImagesIndex, setImagesIndex] = useState(0);

	const [Data, setData] = useState<Sneakers | undefined>();
	useEffect(() => {
		setData({ imageSrc, popup });
		setImages(imageSrc?.img?.[0]?.preview);
	}, [imageSrc, popup]);

	function changeDisplay(src: string, index: number) {
		setImages(src);
		setImagesIndex(index);
	}

	return (
		<div className='main_img_container'>
			<img
				alt='Shoes'
				src={Images}
				className='main_img'
				onClick={() => popup(ImagesIndex)}
			/>
			<div className='preview_img_container'>
				{Data?.imageSrc.img?.map((data, index) => {
					let prvClass = "preview_imags" + index;
					return (
						<img
							alt={`Shoes ${index}`}
							onClick={() => changeDisplay(data.preview, index)}
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
