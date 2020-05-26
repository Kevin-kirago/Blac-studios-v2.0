import styled, { css } from "styled-components";

const isModalOpen = css`
	visibility: visible;
	opacity: 1;
`;

const isModalClosed = css`
	visibility: hidden;
	opacity: 0;
`;

const modalstatus = ({ visible }) => {
	if (visible) {
		return isModalOpen;
	} else {
		return isModalClosed;
	}
};

export const VideoModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.95);
	overflow: hidden;
	transition: all 0.3s ease;
	z-index: 10;

	${modalstatus}

	.modal__content {
		position: relative;
		display: grid;
		align-content: center;
		justify-items: center;
		height: 100%;
		width: 100%;

		&-video {
			position: relative;
			height: 60rem;
			width: 80rem;
		}
	}
`;
