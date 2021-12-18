import React from "react";
import aboutMovie from "../assets/about_movie.mp4";
import clientSprites from "../assets/clients/symbol-defs.svg";

const AboutPage = () => {
	const sprites = ["#icon-bxl-visa", "#icon-bxl-digg", "#icon-bxl-dropbox", "#icon-bxl-ebay"];

	return (
		<div className="about">
			<div className="about__content">
				<section className="about__story">
					<ul className="nav">
						<li className="nav-item">
							<span>/ Who we are</span>
						</li>
					</ul>
					<div className="content">
						<h1 className="heading__primary">
							WE ARE A DESIGN-LED CREATIVE STUDIO, WORKING WITH ANIMATION, VFX AND EMERGING TECHNOLOGIES.
						</h1>
						<p className="paragraph">
							<span>OnTheGrid</span> was established in 2016.
							<br /> Our goal is to please and exceed your needs and expectations, with our intense desire for knowledge and passion in
							&nbsp;<span>ANIMATION</span>, <span>VISUAL EFFECTS</span> and <span>DESIGN</span> for any media.
							<br /> We focus on going above and beyond creatively thanks to our teams diverse backgrounds, be it cinema, television or
							Advertisement. We are proud of our creativity and savviness in what we do. Our creativity works hand in hand with our
							devotion to build your project from start to finish, <span>on time</span> and <span>within the budget</span>.
						</p>
						<p className="paragraph">
							<span>OnTheGrid</span> offers a broad range of 3D Photorealistic <span>CGI</span> design and production services for
							creating the perfect illusion.
							<br /> The only limit is your imagination. Our team made up of a photographer, 3D-Artist, Modellers and Designers will
							turn your idea into a reality.
						</p>
					</div>
				</section>
				<section className="about__studio">
					<video className="about_studio--video" autoPlay loop muted>
						<source src={aboutMovie} type="video/mp4" />
					</video>
				</section>
				<section className="about__feature">
					<ul className="nav">
						<li className="nav-item">
							<span>/ What we do</span>
						</li>
					</ul>
					<div className="content">
						<h3 className="heading__tertiary">Visualizations</h3>
						<p className="paragraph">Advertising and products visualizations, pack shots, etc.</p>
						<h3 className="heading__tertiary">ANIMATION</h3>
						<p className="paragraph">3d and 2d, motion graphics, info-graphics</p>
						<h3 className="heading__tertiary">VFX</h3>
						<p className="paragraph">set extension, keying, etc.</p>
						<h3 className="heading__tertiary">Videography</h3>
						<p className="paragraph">Customer testimonials, Company story videos, Product video etc.</p>
					</div>
				</section>
				<section className="about__clients">
					<ul className="nav">
						<li className="nav-item">
							<span>/ Our clients</span>
						</li>
					</ul>
					<div className="content">
						<p className="paragraph">
							<b>OnTheGrid</b> has been honored to partner up with these clients. We give thanks to those who give us opportunity to
							make content we love.
						</p>
					</div>
					<div className="logo">
						{sprites.map((item) => (
							<div className="logo__container" key={sprites.indexOf(item)}>
								<svg>
									<use href={clientSprites + item} />
								</svg>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
