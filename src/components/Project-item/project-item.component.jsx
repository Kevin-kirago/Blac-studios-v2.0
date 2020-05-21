import React from "react";
import "./project-item.styles.scss";

const ProjectItem = ({ item: { title } }) => {
	return (
		<div className="project__item">
			<div className="project__item-content"></div>
			<div className="project__item-footer">
				<span className="text__bold">Double Data</span>
				<span className="text__light">{title}</span>
			</div>
		</div>
	);
};

export default ProjectItem;
