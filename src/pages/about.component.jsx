import React from "react";

const AboutPage = () => {
	return (
		<div className="about">
			<div className="about__content">
				<section className="about__story">
					<ul className="nav">
						<li className="nav-item">
							<span>/ What we do</span>
						</li>
						<li className="nav-item">
							<span>/ Our Clients</span>
						</li>
					</ul>
					<div className="content">
						<h1 className="heading__primary">
							WE ARE A DESIGN-LED CREATIVE STUDIO, WORKING WITH ANIMATION, VFX AND EMERGING TECHNOLOGIES.
						</h1>
						<p className="paragraph">
							BLAC STUDIOS was established in 2016. Our goal is to please and exceed your needs and expectations, with our intense
							desire for knowledge and passion in ANIMATION, VISUAL EFFECTS and DESIGN for any media.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
