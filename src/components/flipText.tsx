import { useState, useEffect } from "react";
import "../style/flipText.css";

type Word = {
	data: string[][];
};

function FlipText({ data }: Word) {
	const [HtmlArr, setHtmlArr] = useState<string[]>([]);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		function setingEx(temp: string[]) {}

		function DelayLoop(i: number) {
			setTimeout(() => {
				let letter: string = data[Index][i];
				let temp: string[] = [...HtmlArr];
				temp.push(letter);

				setHtmlArr((prevState) => [...prevState, ...temp]);
				if (i < data[Index].length - 1) {
					DelayLoop(i + 1);
				}
			}, 1000 / (data[Index].length - 1));
		}
		DelayLoop(0);

		setTimeout(() => {
			if (Index < data.length - 1) {
				setHtmlArr([]);
				setIndex(Index + 1);
			}
		}, 3000);
	}, [Index]);

	return (
		<div id='flip_container'>
			{HtmlArr.map((element, index) => {
				return (
					<div className='letter' key={index}>
						{element}
					</div>
				);
			})}
		</div>
	);
}
export default FlipText;
