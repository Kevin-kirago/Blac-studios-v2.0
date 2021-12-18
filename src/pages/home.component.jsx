import React from "react";
import homepageVideo from "../assets/Reel.mp4";

const HomePage = () => {
	return (
		<div className="home">
			<video className="video__container" autoPlay loop muted>
				<source src={homepageVideo} type="video/mp4" />
			</video>
		</div>
	);
};

export default HomePage;
