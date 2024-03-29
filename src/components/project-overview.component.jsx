import React, { useState, useEffect, useRef } from "react";
import { openDropDown, closeDropDown } from "../animations/animations";
import { connect } from "react-redux";
import { selectGalleryItem } from "../redux/gallery/gallery.selectors";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";

const ProjectOverview = ({
    projectItem: { title, gallery, reel, credits },
    history,
}) => {
    const [state, setState] = useState({
        isActive: null,
        isReelPlaying: false,
    });

    let creditContainer = useRef(null);

    useEffect(() => {
        if (state.isActive === true) {
            openDropDown(creditContainer);
        } else if (state.isActive === false) {
            closeDropDown(creditContainer);
        }
    }, [state]);

    const toggleAccordion = () => {
        if (state.isActive === null) {
            setState({ isActive: true });
        } else {
            setState({ isActive: !state.isActive });
        }
    };

    const toggleProjectReel = () => {
        setState({ isReelPlaying: !state.isReelPlaying });
    };

    const params = {
        modules: [Navigation, EffectFade],
        effect: "fade",
        navigation: true,
    };

    return (
        <>
            <div className="archives__title">
                <span>{title}</span>
            </div>
            <div className="project">
                <div className="project__content">
                    {!state.isReelPlaying ? (
                        <Swiper {...params}>
                            {gallery.map((img) => (
                                <SwiperSlide
                                    className="project__content-img"
                                    key={gallery.indexOf(img)}
                                >
                                    <img src={img} alt={`project-${title}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="project__content-video">
                            <iframe
                                title="Reel"
                                src={reel}
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            ></iframe>
                        </div>
                    )}
                </div>

                <div className="project__details">
                    <div className="label">
                        {reel ? (
                            <span
                                className="label__holder"
                                onClick={toggleProjectReel}
                            >
                                <span className="label__holder--text">
                                    {state.isReelPlaying
                                        ? "See images"
                                        : "Reel"}
                                </span>
                                <svg>
                                    <use
                                        href={
                                            sprites +
                                            `${
                                                state.isReelPlaying
                                                    ? "#icon-bx-slider"
                                                    : "#play-icon"
                                            }`
                                        }
                                    ></use>
                                </svg>
                            </span>
                        ) : null}
                        <div
                            className="label__holder"
                            onClick={() => history.goBack()}
                        >
                            <span className="label__holder--text">
                                Back to archives
                            </span>
                            <svg className="svg-gallery">
                                <use href={sprites + "#gallery-icon"}></use>
                            </svg>
                        </div>
                    </div>

                    {credits !== null ? (
                        <div className="details">
                            <div className="accordion">
                                <h2 className="heading__tertiary">CREDITS</h2>
                                <div className="accordion__btn">
                                    <svg onClick={toggleAccordion}>
                                        <use
                                            href={
                                                sprites +
                                                `${
                                                    state.isActive
                                                        ? "#icon-bx-minus"
                                                        : "#icon-bx-plus"
                                                }`
                                            }
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="credits"
                                ref={(el) => (creditContainer = el)}
                            >
                                {credits.map(({ title, name }, index) => (
                                    <div
                                        className="credits__container"
                                        key={index}
                                    >
                                        <h4>{title}</h4>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state, { match }) => ({
    projectItem: selectGalleryItem(match.url)(state),
});

const mapDispatchStateToProps = (dispatchEvent) => ({
    toggleModalStatus: (reel) => dispatchEvent(toggleModal(reel)),
});

export default connect(
    mapStateToProps,
    mapDispatchStateToProps
)(ProjectOverview);
