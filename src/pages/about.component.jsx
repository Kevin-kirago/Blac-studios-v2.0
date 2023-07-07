import React from "react";
import aboutMovie from "../assets/about_movie.mp4";

const AboutPage = () => {
    return (
        <div className="about">
            <div className="about__content">
                <section className="about__story">
                    <ul className="nav">
                        <li className="nav-item">
                            <span>/ Who we are :</span>
                        </li>
                    </ul>
                    <div className="content">
                        <h1 className="heading__primary">
                            WE ARE A DESIGN-LED CREATIVE STUDIO, WORKING WITH
                            ANIMATION, VFX AND EMERGING TECHNOLOGIES.
                        </h1>
                        <p className="paragraph">
                            <span>BlacBall Studios,</span> we are a
                            ground-breaking design studio based in Nairobi,
                            Kenya specializing in{" "}
                            <span>
                                POST-PRODUCTION, ANIMATION, COLOR GRADING,
                                VISUAL EFFECTS.
                            </span>
                        </p>
                        <p className="paragraph">
                            Since our establishment in 2017, we have
                            consistently surpassed expectations and brought
                            dreams to life. Our diverse team, dedicated
                            approach, and commitment to delivering projects on
                            time and within budget set us apart in the industry.
                        </p>
                        <p className="paragraph">
                            We are creative pioneers with backgrounds spanning
                            Cinema, Television, and Advertising.
                        </p>
                        <p className="paragraph">
                            Our team is passionate about going above and beyond
                            creatively, merging our artistic vision with
                            efficient project management. Offering a range of
                            services including Photography, 3D art, Modeling,
                            and Design. We specialize in 3D photorealistic CGI
                            design and production.
                        </p>
                        <p className="paragraph">
                            Our expertise lies in crafting illusions that defy
                            reality, allowing us to push the boundaries of
                            imagination.
                        </p>
                        <p className="paragraph">
                            With unrivalled passion, creativity, and expertise,
                            we bring your wildest dreams to life.
                        </p>
                        <p className="paragraph">
                            Don't miss out on the magic - experience the
                            extraordinary worlds we create at{" "}
                            <span>BLACBALL STUDIOS.</span> We are committed to
                            exceeding your expectations and delivering projects
                            that leave a lasting impact
                        </p>
                        <p className="paragraph">
                            <span className="centered_bold">
                                Join us on this remarkable journey and allow us
                                to bring your imaginations to life.
                            </span>
                        </p>

                        <p className="paragraph paragraph__last">
                            Just Imagine …
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
                        <p className="paragraph">
                            Advertising and products visualizations, pack shots,
                            etc.
                        </p>
                        <h3 className="heading__tertiary">ANIMATION</h3>
                        <p className="paragraph">
                            3d and 2d, motion graphics, info-graphics
                        </p>
                        <h3 className="heading__tertiary">VFX</h3>
                        <p className="paragraph">set extension, keying, etc.</p>
                        <h3 className="heading__tertiary">Videography</h3>
                        <p className="paragraph">
                            Customer testimonials, Company story videos, Product
                            video etc.
                        </p>
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
                            <b>BlacBallStudios</b> has been honored to partner
                            up with these clients. We give thanks to those who
                            give us opportunity to make content we love.
                        </p>
                    </div>
                    <div className="logo"></div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
