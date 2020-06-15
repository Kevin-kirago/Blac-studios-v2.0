import styled from "styled-components";

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
	grid-template-rows: 10rem 1fr 10rem;
	transform: translateX(100%);

	.closeBtn {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		img {
			cursor: pointer;
			opacity: 0;
		}
	}

	.nav__drawer--footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;
