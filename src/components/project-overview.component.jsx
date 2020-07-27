import React, { useState, useEffect, useRef } from "react";
import { openDropDown, closeDropDown } from "../animations/animations";
import { connect } from "react-redux";
import { selectGalleryItem } from "../redux/gallery/gallery.selectors";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";
import Swiper from "react-id-swiper";

const ProjectOverview = ({ projectItem: { title, gallery, reel, credits }, toggleModalStatus, history }) => {
	const [state, setState] = useState({
		isActive: null,
		isReelPlaying: false,
	});

	let creditContainer = useRef(null);

	useEffect(() => {
		if (state.isActive === true) {
			openDropDown(creditContainer);
		} else if (state.isActive === false) {
			closeDropDown(creditContainer);
		}
	}, [state]);

	const params = {
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	};

	const toggleAccordion = () => {
		if (state.isActive === null) {
			setState({ isActive: true });
		} else if (state.isActive === true) {
			setState({ isActive: false });
		} else if (state.isActive === false) {
			setState({ isActive: true });
		}
	};

	const toggleProjectReel = () => {
		setState({ isReelPlaying: !state.isReelPlaying });
	};

	return (
		<>
			<div className="archives__title">
				<span>{title}</span>
			</div>
			<div className="project">
				<div className="project__content">
					{!state.isReelPlaying ? (
						<Swiper {...params}>
							{gallery.map((img) => (
								<div className="project__content-img" key={gallery.indexOf(img)}>
									<img src={img} alt={`project-${title}`} />
								</div>
							))}
						</Swiper>
					) : (
						<div className="project__content-video">
							<iframe title="Reel" src={reel} frameBorder="0" width="100%" height="100%"></iframe>
						</div>
					)}
				</div>
				<div className="label">
					{reel ? (
						<span className="label__holder" onClick={toggleProjectReel}>
							<span className="label__holder--text">{state.isReelPlaying ? "See images" : "play reel"}</span>
							<svg>
								<use href={sprites + `${state.isReelPlaying ? "#icon-bx-slider" : "#icon-bx-play-circle"}`}></use>
							</svg>
						</span>
					) : null}
					<div className="label__holder" onClick={() => history.goBack()}>
						<span className="label__holder--text">Back to archives</span>
						<svg>
							<use href={sprites + "#icon-bx-images"}></use>
						</svg>
					</div>
				</div>

				<div className="project__details">
					<div className="accordion">
						<h2 className="heading__tertiary">CREDITS</h2>
						<div className="accordion__btn">
							<svg onClick={toggleAccordion}>
								<use href={sprites + `${state.isActive ? "#icon-bx-minus" : "#icon-bx-plus"}`} />
							</svg>
						</div>
					</div>
					<div className="credits" ref={(el) => (creditContainer = el)}>
						{credits.map(({ title, name }, index) => (
							<div className="credits__container" key={index}>
								<h4>{title}</h4>
								<span>{name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state, { match }) => ({
	projectItem: selectGalleryItem(match.url)(state),
});

const mapDispatchStateToProps = (dispatchEvent) => ({
	toggleModalStatus: (reel) => dispatchEvent(toggleModal(reel)),
});

export default connect(mapStateToProps, mapDispatchStateToProps)(ProjectOverview);
