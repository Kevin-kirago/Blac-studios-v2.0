import React from "react";
import { Route } from "react-router-dom";
import Modal from "../components/Modal/modal.component";
import ProjectCollections from "../components/project-collections.component";
import ProjectOverview from "../components/project-overview.component";

const WorkPage = ({ match }) => {
	return (
		<div className="work">
			<Route exact path="/work" component={ProjectCollections} />
			<Route path={`${match.path}/:projectId`} component={ProjectOverview} />
			<Modal />
		</div>
	);
};

export default WorkPage;
