import React from "react";
import { Link } from "react-router-dom";

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

	handleClick = (e) => {
		console.log(e.target);
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
			</div>
		);
	}
}

export default Navigation;
