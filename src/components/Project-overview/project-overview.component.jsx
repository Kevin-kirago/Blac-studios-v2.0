import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGalleryData } from "../../redux/gallery/gallery.selectors";
import ProjectItem from "../Project-item/project-item.component";
import "./project-overview.styles.scss";

const ProjectOverview = ({ data }) => {
	return (
		<div className="projectOverview">
			{data.map((item) => (
				<ProjectItem key={item.id} item={item} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectGalleryData,
});

export default connect(mapStateToProps)(ProjectOverview);
