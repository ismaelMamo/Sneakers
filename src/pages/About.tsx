//import { useState, useEffect } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/about.css";
function About() {
	const data = [
		{
			imgUrl:
				"data:image/jpeg;base64,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",
			review:
				"In vitae blandit leo. Quisque congue, nisi id lacinia scelerisque, arcu lectus pulvinar purus.",
			name: "Mael Miller",
		},
		{
			imgUrl:
				"data:image/jpeg;base64,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",
			review:
				"Donec malesuada sapien facilisis, aliquam ante vitae, convallis justo. Aenean vel tincidunt eros. Quisque ac urna laoreet, malesuada magna at, pretium dolor. Nullam vitae porttitor enim. ",
			name: "Emily Gibson",
		},
		{
			imgUrl:
				"data:image/jpeg;base64,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",
			review:
				"Morbi vitae enim risus. Nam ac sapien elit. Donec ullamcorper, leo at porta faucibus, sapien eros gravida sapien, eget rhoncus lectus neque a arcu.",
			name: "Ebenezer Harper",
		},
	];
	return (
		<div id='about_main_container'>
			<div id='review_main_container'>
				<div id='review_title_container'>
					<FormatQuoteIcon id='quote_left' />
					<div id='review_title'>Customer Reviews</div>
					<FormatQuoteIcon id='quote_right' />
				</div>
				<Swiper id='review_body_display'>
					{data.map((element, index) => {
						return (
							<SwiperSlide key={index + "SwiperSlide"}>
								<div
									className='review_body_container'
									key={index + "review_sub_body_container"}
								>
									<div
										key={index + "review_img_container"}
										className='review_img_container'
									>
										<img
											alt={"profile of " + element.name}
											key={index + "review_img_container_img"}
											src={element.imgUrl}
											className='review_img'
										/>
									</div>
									<div
										key={index + "review_text_container"}
										className='review_text_container'
									>
										<div key={index + "review"} className='review'>
											{element.review}
										</div>
										<div
											key={index + "reviewer_name"}
											className='reviewer_name'
										>
											{element.name}
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default About;
