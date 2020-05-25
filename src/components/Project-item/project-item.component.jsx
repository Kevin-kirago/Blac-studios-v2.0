import React from "react";
import sprites from "../../assets/sprite.svg";
import "./project-item.styles.scss";

const ProjectItem = (props) => {
	const {
		item: { title, thumbnail, routeName, reel },
		history,
	} = props;

	return (
		<div className="project__item">
			<img className="img__thumbnail" src={thumbnail} alt={`project-${title}`} onClick={() => history.push(`${routeName}`)} />
			<span className="project__item--title">{title}</span>
			<div className="icon__set">
				{reel ? (
					<span className="icon__holder">
						<span className="icon__holder--text">Play video</span>
						<svg>
							<use href={sprites + "#icon-bx-play-circle"}></use>
						</svg>
					</span>
				) : null}
				<span className="icon__holder" onClick={() => history.push(`${routeName}`)}>
					<span className="icon__holder--text">Explore</span>
					<svg>
						<use href={sprites + "#icon-bx-images"}></use>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default ProjectItem;
