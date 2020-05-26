import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectModal } from "../../redux/modal/modal.selector";
import { toggleModal } from "../../redux/modal/modal.action";
import { VideoModal } from "./modal.styles";

const Modal = ({ modalStatus: { isModalOpen, currentProjectvideo }, toggleModalStatus }) => {
	return (
		<VideoModal visible={isModalOpen} onClick={() => toggleModalStatus(null)}>
			<div className="modal__content">
				<div className="modal__content-video">
					<iframe title="Reel" src={currentProjectvideo} frameBorder="0" width="100%" height="100%"></iframe>
				</div>
			</div>
		</VideoModal>
	);
};

const mapStateToProps = createStructuredSelector({
	modalStatus: selectModal,
});

const mapDispatchStateToProps = (dispatchEvent) => ({
	toggleModalStatus: (reel) => dispatchEvent(toggleModal(reel)),
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Modal);
