import React from "react";

const AboutPage = () => {
	return (
		<div className="about">
			<div className="about__content">
				<section className="about__story">
					<ul className="nav">
						<li className="nav-item">
							<span>/ About Us</span>
						</li>
					</ul>
					<div className="content">
						<h1 className="heading__primary">
							WE ARE A DESIGN-LED CREATIVE STUDIO, WORKING WITH ANIMATION, VFX AND EMERGING TECHNOLOGIES.
						</h1>
						<p className="paragraph">
							<span>BLAC STUDIOS</span> was established in 2016.
							<br /> Our goal is to please and exceed your needs and expectations, with our intense desire for knowledge and passion in
							<span>ANIMATION</span>, <span>VISUAL EFFECTS</span> and <span>DESIGN</span> for any media.
							<br /> We focus on going above and beyond creatively thanks to our teams diverse backgrounds, be it cinema, television or
							post production. We are proud of our creativity and savviness in what we do. Our creativity works hand in hand with our
							devotion to build your project from start to finish, <span>on time</span> and <span>within the budget</span>.
						</p>
						<p className="paragraph">
							<span>BLAC STUDIOS</span> offers a broad range of 3D Photorealistic <span>CGI</span> design and production services for
							creating the perfect illusion.
							<br /> The only limit is your imagination Our team made up of a photographer, 3D-Artist, Modellers and Designers will turn
							your idea into a reality.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
