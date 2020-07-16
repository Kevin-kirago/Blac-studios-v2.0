import React from "react";
import { connect } from "react-redux";
import { selectGalleryItem } from "../redux/gallery/gallery.selectors";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";
import Swiper from "react-id-swiper";

const ProjectOverview = ({ projectItem: { title, gallery, reel, routeName }, toggleModalStatus, history }) => {
	const params = {
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
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
				<div className="project__details">
					<div className="credits">
						<h2 className="heading__tertiary">CREDITS</h2>
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

					<div className="label">
						<div className="label__holder" onClick={() => history.goBack()}>
							<span className="label__holder--text">Explore</span>
							<svg>
								<use href={sprites + "#icon-bx-images"}></use>
							</svg>
						</div>
						{reel ? (
							<span className="label__holder" onClick={() => toggleModalStatus(reel)}>
								<span className="label__holder--text">Play video</span>
								<svg>
									<use href={sprites + "#icon-bx-play-circle"}></use>
								</svg>
							</span>
						) : null}
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
