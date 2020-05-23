import React from "react";
import "./project-item.styles.scss";

const ProjectItem = ({ item: { title, thumbnail, routeName }, history, match }) => {
	return (
		<div className="project__item" onClick={() => history.push(`${routeName}`)}>
			<img className="img__thumbnail" src={thumbnail} alt={`project-${title}`} />
			<span className="project__item--title">{title}</span>
		</div>
	);
};

export default ProjectItem;
