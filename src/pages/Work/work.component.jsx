import React from "react";
import { Route } from "react-router-dom";
import Modal from "../../components/Modal/modal.component";
import ProjectCollections from "../../components/Project-collections/project-collections.component";
import ProjectOverview from "../../components/Project-overview/project-overview.component";
import "./work.styles.scss";

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
