import React from "react";
import "./slide.styles.scss";
// import styled from "styled-components";

// const SlideObject = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	.slide__preview {
// 		position: relative;
// 		width: 100% !important;
// 		height: 100vh !important;

// 		img {
// 			display: block;
// 			width: 100%;
// 			height: 100%;
// 			object-fit: cover;
// 		}
// 	}
// `;

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
