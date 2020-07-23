import React, { useState, useEffect, useRef, createRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { TimelineMax, Power3 } from "gsap/all";
import { handleHoverEnter, handleHoverExit } from "../animations/animations";
import removeBtn from "../assets/bx-x.svg";
import Routes from "../routes/routes";
import NavMenu from "../assets/bx-menu.svg";
import logo from "../assets/logo.png";

const Navigation = ({ history }) => {
	const [navStatus, setNavStatus] = useState({ isOpen: null });
	const [timeLine, setTimeLine] = useState(new TimelineMax());
	let navigationDrawerRef = useRef(null);
	let linkRefs = useRef(Routes.map(() => createRef()));

	useEffect(() => {
		const linkList = linkRefs.current.map((el) => el);
		setTimeLine(
			timeLine
				.to(navigationDrawerRef, { y: 0, duration: 0.7, ease: Power3.easeInOut })
				.staggerTo(linkList, 0.3, { delay: 0.1, autoAlpha: 1, opacity: 1, ease: Power3.easeInOut }, 0.1)
				.pause()
		);
	}, [timeLine]);

	useEffect(() => {
		if (navStatus.isOpen === true) {
			timeLine.play();
		} else if (navStatus.isOpen === false) {
			timeLine.reverse();
		}
	}, [timeLine, navStatus.isOpen]);

	//Use Effect
	useEffect(() => {
		//Listening for page changes.
		history.listen(() => {
			setNavStatus({ isOpen: false });
		});
	}, [history]);

	// handleClick func
	const handleClick = () => {
		if (navStatus.isOpen === null) {
			setNavStatus({ isOpen: true });
		} else {
			setNavStatus({ isOpen: !navStatus.isOpen });
		}
	};

	return (
		<div className="navigation">
			<div className="navigation__wrapper">
				<Link to="/" className="navigation__logo">
					<img src={logo} alt="nav-logo" />
				</Link>
				<div className="navigation__menu" onClick={handleClick}>
					<img src={NavMenu} alt="nav-menu" />
				</div>
			</div>
			<div className="navigation__drawer" ref={(el) => (navigationDrawerRef = el)}>
				<div className="navigation__drawer--header">
					<img src={removeBtn} alt="remove-x" onClick={handleClick} />
				</div>
				<div className="navigation__drawer--main">
					<ul className="navigation__list">
						{Routes.map(({ path, page_title }, key) => (
							<li key={key} className="navigation__item">
								<Link
									onMouseEnter={(e) => handleHoverEnter(e)}
									onMouseOut={(e) => handleHoverExit(e)}
									ref={(el) => (linkRefs.current[key] = el)}
									to={path}
									className="navigation__item--link">
									{page_title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="navigation__drawer--footer">
					<span className="footer__nav--header">All Works @Blac Studios {new Date().getFullYear()}</span>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Navigation);
