import React from "react";
import ProjectOverview from "../../components/Project-overview/project-overview.component";
import "./work.styles.scss";

const WorkPage = () => {
	return (
		<div className="work">
			<div className="work__title">
				<span>Explore our Archives</span>
			</div>
			<ProjectOverview />
		</div>
	);
};

export default WorkPage;
