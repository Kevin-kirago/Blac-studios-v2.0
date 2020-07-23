import React, { useState, useEffect, useRef } from "react";
import { openDropDown, closeDropDown } from "../animations/animations";
import { connect } from "react-redux";
import { selectGalleryItem } from "../redux/gallery/gallery.selectors";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";
import Swiper from "react-id-swiper";

const ProjectOverview = ({ projectItem: { title, gallery, reel }, toggleModalStatus, history }) => {
	const [state, setState] = useState({ isOpen: null });

	// const [active, setActive] = useState("")
	let creditContainer = useRef(null);

	useEffect(() => {
		if (state.isOpen === true) {
			openDropDown(creditContainer);
		} else if (state.isOpen === false) {
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
		if (state.isOpen === null) {
			setState({ isOpen: true });
		} else if (state.isOpen === true) {
			setState({ isOpen: false });
		} else if (state.isOpen === false) {
			setState({ isOpen: true });
		}
	};

	return (
		<>
			<div className="archives__title">
				<span>{title}</span>
			</div>
			<div className="project__content">
				<Swiper {...params}>
					{gallery.map((img) => (
						<div className="project__content-img" key={gallery.indexOf(img)}>
							<img src={img} alt={`project-${title}`} />
						</div>
					))}
				</Swiper>
				<div className="label">
					{reel ? (
						<span className="label__holder" onClick={() => toggleModalStatus(reel)}>
							<span className="label__holder--text">reel</span>
							<svg>
								<use href={sprites + "#icon-bx-play-circle"}></use>
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
								<use href={sprites + `${state.isOpen ? "#icon-bx-minus" : "#icon-bx-plus"}`} />
							</svg>
						</div>
					</div>
					<div className="credits" ref={(el) => (creditContainer = el)}>
						<div className="credits__container">
							<h4>Director</h4>
							<span>Josh Gitonga</span>
						</div>
						<div className="credits__container">
							<h4>Production</h4>
							<span>C-Hub</span>
						</div>
						<div className="credits__container">
							<h4>Agency</h4>
							<span>Ogilvy</span>
						</div>
						<div className="credits__container">
							<h4>Post/Production</h4>
							<span>Ogilvy</span>
						</div>
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
