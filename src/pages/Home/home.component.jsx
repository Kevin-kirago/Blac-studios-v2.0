import React from "react";
import Swiper from "react-id-swiper";
import Slide from "../../components/slide/slide.component";

import "swiper/css/swiper.css";
import "./home.styles.scss";

// images
import iria from "../../assets/products/iria.png";
import toyCar from "../../assets/products/toyCar.jpg";
import black from "../../assets/products/black.png";
import whiskey from "../../assets/products/whiskey.png";

const HomePage = () => {
	const data = [toyCar, black, iria, whiskey];

	const params = {
		direction: "vertical",
		// autoplay: {
		// 	delay: 10000,
		// 	disableOnInteraction: false,
		// },
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	};

	return (
		<div className="home">
			<Swiper {...params}>
				{data.map((el) => (
					<div className="slide" key={data.indexOf(el)}>
						<Slide imageUrl={el} index={data.indexOf(el)}></Slide>
					</div>
				))}
			</Swiper>
		</div>
	);
};

export default HomePage;
