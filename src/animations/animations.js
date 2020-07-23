import { TweenLite, Power3 } from "gsap";

// Hover on the link
export const handleHoverEnter = (e) => {
	TweenLite.to(e.target, {
		duration: 0.4,
		y: 3,
		skewX: 4,
		color: "#fff",
		ease: Power3.easeInOut,
	});
};

// Hover off the link
export const handleHoverExit = (e) => {
	TweenLite.to(e.target, {
		duration: 0.4,
		y: -3,
		skewX: 0,
		color: "#ffc300",
		ease: Power3.easeInOut,
	});
};

// drop the accordion
export const openDropDown = (node) => {
	TweenLite.to(node, {
		maxHeight: node.scrollHeight,
		margin: "20px 0",
		visibility: "visible",
		duration: 0.2,
		delay: 0.2,
		ease: Power3.easeInOut,
	});
};

// close the accordion
export const closeDropDown = (node) => {
	TweenLite.to(node, {
		maxHeight: "0px",
		margin: 0,
		visibility: "hidden",
		duration: 0.4,
		ease: Power3.easeInOut,
	});
};
