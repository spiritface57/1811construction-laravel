import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { hero } from "../../data/hero";
const Hero = ({ refs }) => {
    function handleScroll() {
        refs["about"].current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section id="home" className="hero section dark-background">
            <div className="info d-flex align-items-center">
                <div className="container">
                    <div
                        className="row justify-content-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="col-lg-6 text-center">
                            <h2>{hero.header}</h2>
                            <p>{hero.paragraph1}</p>
                            <p>{hero.paragraph2}</p>
                            <a
                                onClick={handleScroll}
                                href="#about"
                                className="btn-get-started plain"
                            >
                                {hero.button}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="hero-carousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                {hero.images.map((image,index) => {
                    return (
                        <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                            <img src={image} alt="" />
                        </div>
                    )
                })}
                <a
                    className="carousel-control-prev"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                    style={{ textDecoration: "none" }}
                >
                    <span
                        className="carousel-control-prev-icon bi bi-chevron-left"
                        aria-hidden="true"
                    ></span>
                </a>

                <a
                    className="carousel-control-next"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                    style={{ textDecoration: "none" }}
                >
                    <span
                        className="carousel-control-next-icon bi bi-chevron-right"
                        aria-hidden="true"
                    ></span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
