import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./vertical-slider.styles.scss";

const VerticalSlider = () => {
	const params = {
		direction: "vertical",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		mousewheel: true,
		loop: true,
		resistanceRatio: 0,
	};

	return (
		<div className="swiper__content">
			<Swiper {...params}>
				<div className="product_slider">Slide #1</div>
				<div className="product_slider">Slide #2</div>
				<div className="product_slider">Slide #3</div>
				<div className="product_slider">Slide #4</div>
				<div className="product_slider">Slide #5</div>
			</Swiper>
		</div>
	);
};
export default VerticalSlider;
