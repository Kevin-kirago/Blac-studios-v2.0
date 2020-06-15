import React from "react";
import sprites from "../assets/sprite.svg";

const Footer = () => {
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
					<li className="footer__nav--list-item">
						<a href="https://vimeo.com/blacstudioske" target="_blank" rel="noopener noreferrer">
							<svg className="footer__social-icon">
								<use href={sprites + "#icon-bxl-vimeo"}></use>
							</svg>
						</a>
					</li>
					<li className="footer__nav--list-item">
						<a href="https://www.behance.net/KamauSaich" target="_blank" rel="noopener noreferrer">
							<svg className="footer__social-icon">
								<use href={sprites + "#icon-behance"}></use>
							</svg>
						</a>
					</li>
					<li className="footer__nav--list-item">
						<a
							href="https://www.instagram.com/blacstudioske/?utm_source=ig_profile_share&igshid=1p"
							target="_blank"
							rel="noopener noreferrer">
							<svg className="footer__social-icon">
								<use href={sprites + "#icon-bxl-instagram-alt"}></use>
							</svg>
						</a>
					</li>
					<li className="footer__nav--list-item">
						<a href="https://twitter.com/BlastudiosKe?s=08" target="_blank" rel="noopener noreferrer">
							<svg className="footer__social-icon">
								<use href={sprites + "#icon-bxl-twitter"}></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
