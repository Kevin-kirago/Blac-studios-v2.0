import React, { useState, useEffect, useRef } from "react";
import { TimelineMax } from "gsap/all";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectModal } from "../redux/modal/modal.selector";
import { toggleModal } from "../redux/modal/modal.action";
import sprites from "../assets/sprite.svg";

const Modal = ({ modalStatus: { isModalOpen, currentProjectvideo }, toggleModalStatus }) => {
	const [timeLine, setTimeline] = useState(new TimelineMax());
	let modal = useRef(null);
	let modalContent = useRef(null);

	useEffect(() => {
		setTimeline(
			timeLine
				.to(modal, 0.5, { opacity: 1, visibility: "visible", autoAlpha: 1, ease: "power3.inOut" })
				.to(modalContent, 1, { display: "grid", autoAlpha: 1, ease: "power3.inOut" })
		);
	}, [timeLine]);

	useEffect(() => {
		if (isModalOpen === true) {
			timeLine.play();
		} else if (isModalOpen === false) {
			timeLine.reverse();
		}
	}, [timeLine, isModalOpen]);

	return (
		<div className={`modal ${isModalOpen === false ? "modal__closed" : null}`} ref={(el) => (modal = el)} onClick={() => toggleModalStatus(null)}>
			<div className="modal__content" ref={(el) => (modalContent = el)}>
				<div className="modal__content--removeBtn">
					<svg>
						<use href={sprites + "#icon-bx-x"} />
					</svg>
				</div>
				<div className="modal__content-video">
					<iframe title="Reel" src={currentProjectvideo} frameBorder="0" width="100%" height="100%"></iframe>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	modalStatus: selectModal,
});

const mapDispatchStateToProps = (dispatchEvent) => ({
	toggleModalStatus: (reel) => dispatchEvent(toggleModal(reel)),
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Modal);
