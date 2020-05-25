import React from "react";
import { connect } from "react-redux";
import { selectGalleryItem } from "../../redux/gallery/gallery.selectors";

const ProjectOverview = ({ projectItem: { title } }) => {
	return (
		<>
			<div className="work__title">
				<span>{title}</span>
			</div>
		</>
	);
};

const mapStateToProps = (state, { match }) => ({
	projectItem: selectGalleryItem(match.url)(state),
});

export default connect(mapStateToProps)(ProjectOverview);