import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGalleryData } from "../../redux/gallery/gallery.selectors";
import ProjectItem from "../Project-item/project-item.component";
import "./project-collections.styles.scss";

const ProjectCollections = ({ data, ...otherProps }) => {
	return (
		<>
			<div className="work__title">
				<span>Explore our Archives</span>
			</div>
			<div className="projectOverview">
				{data.map((item) => (
					<ProjectItem key={item.id} item={item} {...otherProps} />
				))}
			</div>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectGalleryData,
});

export default connect(mapStateToProps)(withRouter(ProjectCollections));
