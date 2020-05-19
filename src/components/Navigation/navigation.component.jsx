import React from "react";
import { Link } from "react-router-dom";
import NavigationDrawer from "../Navigation-drawer/nav-drawer.component";

import NavMenu from "../../assets/bx-menu.svg";
import logo from "../../assets/logo.png";
import "./navigation.styles.scss";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="navigation">
				<Link to="/" className="navigation__logo">
					<img src={logo} alt="nav-logo" />
				</Link>
				<div className="navigation__menu" onClick={this.handleClick}>
					<img src={NavMenu} alt="nav-menu" />
				</div>
				<NavigationDrawer isOpen={this.state.isOpen} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default Navigation;
