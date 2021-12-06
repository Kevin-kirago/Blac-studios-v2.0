import React from "react";
import homepageVideo from "../assets/Reel.mp4";
// import Swiper from "react-id-swiper";
// import Slide from "../components/slide.component";
// import "swiper/swiper-bundle.css";

// images
// import iria from "../assets/products/iria.png";
// import toyCar from "../assets/products/toyCar.jpg";
// import black from "../assets/products/black.png";
// import whiskey from "../assets/products/whiskey.png";

const HomePage = () => {
	// const data = [toyCar, black, iria, whiskey];

	// const params = {
	// 	direction: "vertical",
	// 	autoplay: {
	// 		delay: 10000,
	// 		disableOnInteraction: false,
	// 	},
	// 	loop: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true,
	// 	},
	// };

	return (
		<div className="home">
			<video className="video__container" autoPlay loop muted>
				<source src={homepageVideo} type="video/mp4" />
			</video>
			{/* <Swiper {...params}>
				{data.map((el) => (
					<div className="slide" key={data.indexOf(el)}>
						<Slide imageUrl={el} index={data.indexOf(el)}></Slide>
					</div>
				))}
			</Swiper> */}
		</div>
	);
};

export default HomePage;
