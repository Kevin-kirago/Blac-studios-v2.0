import { TweenLite } from "gsap";

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
