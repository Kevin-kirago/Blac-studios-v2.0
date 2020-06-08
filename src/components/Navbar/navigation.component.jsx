import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationDrawer from "../Navbar-drawer/nav-drawer.component";

import NavMenu from "../../assets/bx-menu.svg";
import logo from "../../assets/logo.png";
import "./navigation.styles.scss";

const Navigation = () => {
	const [navStatus, setNavStatus] = useState({ isOpen: false });
	const { isOpen } = navStatus;

	const handleClick = () => {
		setNavStatus({ isOpen: !isOpen });
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
