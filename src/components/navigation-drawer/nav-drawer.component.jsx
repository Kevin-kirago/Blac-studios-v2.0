import React from "react";
import { NavLink } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap/all";

import removeBtn from "../../assets/bx-x.svg";
import { Drawer } from "./nav-drawer.styles";

class NavigationDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.img = null;
		this.drawer = null;
		this.drawerOverlay = null;
		this.timeline1 = new TimelineLite();
	}

	componentDidMount() {
		this.timeline1
			.to([this.drawer, this.drawerOverlay], 1, { x: "0", visibility: true, ease: Power3.easeOut })
			.to(this.img, { opacity: 1, duration: 0.6 })
			.reverse();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isOpen !== this.props.isOpen) {
			this.timeline1.reversed(!this.props.isOpen);
		}
	}

	render() {
		const { handleClick } = this.props;

		return (
			<>
				<div className="navigation__overlay" ref={(drOvl) => (this.drawerOverlay = drOvl)}></div>
				<Drawer ref={(drawer) => (this.drawer = drawer)}>
					<div className="closeBtn">
						<img src={removeBtn} alt="remove-x" onClick={handleClick} ref={(img) => (this.img = img)} />
					</div>
					<ul className="navigation__list">
						<li className="navigation__item">
							<NavLink to="/" className="navigation__item--link">
								Home
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink to="/work" className="navigation__item--link">
								Work
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink to="/about" className="navigation__item--link">
								About
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink to="/contact" className="navigation__item--link">
								Contact
							</NavLink>
						</li>
					</ul>
				</Drawer>
			</>
		);
	}
}

export default NavigationDrawer;
