import React from "react";
import { NavLink } from "react-router-dom";
import removeBtn from "../../assets/bx-x.svg";
import { Drawer } from "./nav-drawer.styles";

const NavigationDrawer = ({ isOpen, handleClick }) => {
	return (
		<>
			<div className={`navigation__overlay ${isOpen ? "navigation__overlay--open" : "navigation__overlay--closed"}`}></div>
			<Drawer isOpen={isOpen}>
				<div className="closeBtn">
					<img src={removeBtn} alt="remove-x" onClick={handleClick} />
				</div>
				<ul className="navigation__list">
					<li className="navigation__item" onClick={handleClick}>
						<NavLink to="/" className="navigation__item--link">
							Home
						</NavLink>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<NavLink to="/work" className="navigation__item--link">
							Work
						</NavLink>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<NavLink to="/about" className="navigation__item--link">
							About
						</NavLink>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<NavLink to="/contact" className="navigation__item--link">
							Contact
						</NavLink>
					</li>
				</ul>
			</Drawer>
		</>
	);
};

export default NavigationDrawer;
