import React from "react";
import "./slide.styles.scss";

const Slide = ({ imageUrl, index }) => {
	return (
		<>
			<div className="slide__preview">
				<img src={imageUrl} alt={`slide-${index}`} />
				<div className="slide__preview--details"></div>
			</div>
		</>
	);
};

export default Slide;
