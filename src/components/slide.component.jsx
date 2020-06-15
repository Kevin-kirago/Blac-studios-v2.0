import React from "react";

const Slide = ({ imageUrl, index }) => {
	return (
		<>
			<div className="slide__preview">
				<img src={imageUrl} alt={`slide-${index}`} />
			</div>
		</>
	);
};

export default Slide;
