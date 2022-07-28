import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image1 from "../images/brands/5841914ea6515b1e0ad75a4d.png";
import Image2 from "../images/brands/5847f18dcef1014c0b5e485a.png";
import Image3 from "../images/brands/5842f013a6515b1e0ad75b10.png";
import Image4 from "../images/brands/5842f005a6515b1e0ad75b0f.png";
import Image5 from "../images/brands/626ab15bfa896772785f2414.png";
import Image6 from "../images/brands/621e4454f1231b47bf27036a.png";

import "../style/ourBrands.css";

function OurBrands() {
	const BrandList = [Image1, Image2, Image3, Image4, Image5, Image6];
	return (
		<div id='our_brand_container'>
			<div id='brands_text_container'>
				<div id='brands_decoration_1' />
				<div id='brands_text'>Brands</div>
				<div id='brands_decoration_2' />
				<Link id='brands_link' to='/Collection'>
					<div id='collection_link'>
						<div id='collection_link_text'>SEE MORE</div>
						<KeyboardArrowRightIcon id='brands_link_arrow' />
					</div>
				</Link>
			</div>
			<div id='brands_imgs_container'>
				{BrandList.map((element, index) => {
					return (
						<div key={"cont" + index} className='Brand_img_container'>
							<img
								className='Brand_img'
								alt='Brand logo'
								key={index}
								src={element}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default OurBrands;
