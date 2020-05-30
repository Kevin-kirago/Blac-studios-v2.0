import React from "react";
import { connect } from "react-redux";
import { selectGalleryItem } from "../../redux/gallery/gallery.selectors";
import Swiper from "react-id-swiper";
import "./project-overview.styles.scss";

const ProjectOverview = ({ projectItem: { title, gallery } }) => {
	const params = {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	};
	return (
		<>
			<div className="work__title">
				<span>{title}</span>
			</div>
			<div className="work__content">
				<Swiper {...params}>
					{gallery.map((img) => (
						<div className="work__content-img">
							<img src={img} alt={`project-${title}`} />
						</div>
					))}
				</Swiper>
			</div>
		</>
	);
};

const mapStateToProps = (state, { match }) => ({
	projectItem: selectGalleryItem(match.url)(state),
});

export default connect(mapStateToProps)(ProjectOverview);
