import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";

const ProjectItem = (props) => {
    const {
        item: { title, thumbnail, routeName, reel },
        history,
        toggleModalStatus,
    } = props;

    return (
        <div className="project__item">
            <div className="project__item--container">
                <img
                    className="img__thumbnail"
                    src={thumbnail}
                    alt={`project-${title}`}
                    onClick={() => history.push(`${routeName}`)}
                />
                <div className="icon__set">
                    {reel ? (
                        <span
                            className="icon__holder"
                            onClick={() => toggleModalStatus(reel)}
                        >
                            <span className="icon__holder--text">Reel</span>
                            <svg>
                                <use href={sprites + "#play-icon"}></use>
                            </svg>
                        </span>
                    ) : (
                        <span
                            className="icon__holder"
                            onClick={() => history.push(`${routeName}`)}
                        >
                            <span className="icon__holder--text">Explore</span>
                            <svg className="svg-gallery">
                                <use href={sprites + "#gallery-icon"}></use>
                            </svg>
                        </span>
                    )}
                </div>
                <div className="item__title">
                    <p className="title">{title}</p>
                </div>
            </div>
        </div>
    );
};

const mapDispatchStateToProps = (dispatchEvent) => ({
    toggleModalStatus: (reel) => dispatchEvent(toggleModal(reel)),
});

export default connect(null, mapDispatchStateToProps)(ProjectItem);
