import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationDrawer from "./nav-drawer.component";

import NavMenu from "../../assets/bx-menu.svg";
import logo from "../../assets/logo.png";

const Navigation = () => {
	const [navStatus, setNavStatus] = useState({ isOpen: null });
	const { isOpen } = navStatus;

	const handleClick = () => {
		if (isOpen === null) {
			setNavStatus({ isOpen: true });
		} else {
			setNavStatus({ isOpen: !isOpen });
		}
	};

	return (
		<div className="navigation">
			<Link to="/" className="navigation__logo">
				<img src={logo} alt="nav-logo" />
			</Link>
			<div className="navigation__menu" onClick={handleClick}>
				<img src={NavMenu} alt="nav-menu" />
			</div>
			<NavigationDrawer isOpen={isOpen} handleClick={handleClick} />
		</div>
	);
};

export default Navigation;
