import React from "react";
import sprites from "../assets/sprite.svg";

const Footer = () => {
	const linkData = [
		{
			linkUrl: "https://vimeo.com/blacstudioske",
			title: "Vimeo",
			icon: "#icon-bxl-vimeo",
		},
		{
			linkUrl: "https://www.behance.net/KamauSaich",
			title: "Behance",
			icon: "#icon-behance",
		},
		{
			linkUrl: "https://www.instagram.com/blacstudioske/?utm_source=ig_profile_share&igshid=1p",
			title: "Instagram",
			icon: "#icon-bxl-instagram-alt",
		},
		{
			linkUrl: "https://twitter.com/BlastudiosKe?s=08",
			title: "Twitter",
			icon: "#icon-bxl-twitter",
		},
	];

	return (
		<footer className="footer">
			<div className="footer__description">
				<span className="footer__description--text">
					We bring together architecture, storytelling and emerging technologies to create award winning work.
				</span>
			</div>
			<div className="footer__nav">
				<span className="footer__nav--header">All Works @Blac Studios {new Date().getFullYear()}</span>
				<ul className="footer__nav--list">
					{linkData.map((item) => (
						<li className="footer__nav--list-item" key={linkData.indexOf(item)}>
							<a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
								<svg className="footer__social-icon">
									<use href={sprites + item.icon}></use>
								</svg>
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
