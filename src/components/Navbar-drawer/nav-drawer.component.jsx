import React, { useState, useEffect, useRef, createRef } from "react";
import { TimelineMax, Power3, CSSPlugin, gsap } from "gsap/all";

import { NavLink } from "react-router-dom";
import { Drawer } from "./nav-drawer.styles";
import removeBtn from "../../assets/bx-x.svg";
import Routes from "../../routes/routes";

gsap.registerPlugin(CSSPlugin);

const NavigationDrawer = ({ isOpen, handleClick }) => {
	const [timeLine, setTimeLine] = useState(new TimelineMax());
	let navigationOverlayRef = useRef(null);
	let navigationDrawerRef = useRef(null);
	let removeBtnRef = useRef(null);
	let linkRefs = useRef(Routes.map(() => createRef()));

	useEffect(() => {
		const linkList = linkRefs.current.map((el) => el);

		setTimeLine(
			timeLine
				.to([navigationOverlayRef, navigationDrawerRef], 0.4, { x: 0, ease: Power3.easeInOut })
				.to(removeBtnRef, 0.3, { opacity: 1, ease: Power3.easeInOut })
				.staggerTo(linkList, 0.2, { autoAlpha: 1, opacity: 1 }, 0.1)
				.pause()
		);
	}, [timeLine]);

	useEffect(() => {
		if (isOpen === true) {
			timeLine.play();
		} else if (isOpen === false) {
			timeLine.reverse();
		}
	}, [timeLine, isOpen]);

	return (
		<>
			<div ref={(el) => (navigationOverlayRef = el)} className={`navigation__overlay`}></div>
			<Drawer ref={(el) => (navigationDrawerRef = el)} isOpen={isOpen}>
				<div className="closeBtn">
					<img src={removeBtn} ref={(el) => (removeBtnRef = el)} alt="remove-x" onClick={handleClick} />
				</div>
				<ul className="navigation__list">
					{Routes.map(({ path, page_title }, key) => (
						<li key={key} className="navigation__item" onClick={handleClick}>
							<NavLink ref={(el) => (linkRefs.current[key] = el)} to={path} className="navigation__item--link">
								{page_title}
							</NavLink>
						</li>
					))}
				</ul>
			</Drawer>
		</>
	);
};

export default NavigationDrawer;
