import { useState, useEffect } from "react";
import "../style/flipText.css";

type Word = {
	data: string[][];
};

function FlipText({ data }: Word) {
	const [HtmlArr, setHtmlArr] = useState<string[]>([]);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		function DelayLoop(i: number) {
			setTimeout(() => {
				let letter: string = data[Index][i];
				let temp: string[] = [...HtmlArr];
				temp.push(letter);

				setHtmlArr((prevState) => [...prevState, ...temp]);
				if (i < data[Index].length - 1) {
					DelayLoop(i + 1);
				}
			}, 500 / (data[Index].length - 1));
		}
		DelayLoop(0);

		setTimeout(() => {
			if (Index < data.length - 1) {
				setHtmlArr([]);
				setIndex(Index + 1);
			}
		}, 3000);
	}, [Index, data]);

	return (
		<div id='flip_container'>
			<div id='flip_container1'>
				{HtmlArr.map((element, index) => {
					return (
						<div className='letter' key={index}>
							{element}
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default FlipText;
