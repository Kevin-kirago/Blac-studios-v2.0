import { TweenLite } from "gsap/all";

export const handleHoverEnter = (e) => {
	TweenLite.to(e.target, {
		duration: 0.1,
		y: 3,
		skewX: 4,
		color: "#fff",
		ease: "power1.inOut",
	});
};

// Hover off the link
export const handleHoverExit = (e) => {
	TweenLite.to(e.target, {
		duration: 0.1,
		y: -3,
		skewX: 0,
		color: "#ffc300",
		ease: "power1.inOut",
	});
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
	TweenLite.from(node, {
		y: 60,
		duration: 1,
		delay: 0.2,
		opacity: 0,
		ease: "power3.inOut",
	});
};
