import styled, { css } from "styled-components";

const navOpen = css`
	transform: translateX(0);
`;
const navClosed = css`
	transform: translateX(100%);
`;

const getNavStatus = ({ isOpen }) => {
	if (isOpen) {
		return navOpen;
	} else {
		return navClosed;
	}
};

export const Drawer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 50%;
	height: 100vh;
	background-color: #000;
	z-index: 5;
	padding: 0 4rem;

	display: grid;
	align-content: center;
	transition: transform 0.4s ease;

	.closeBtn {
		position: absolute;
		top: 0;
		right: 4rem;
		height: 10rem;

		display: flex;
		align-items: center;

		img {
			cursor: pointer;
		}
	}

	${getNavStatus}
`;
