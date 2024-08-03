import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = ({ refs }) => {
  function handleScroll() {
    refs["contact"].current.scrollIntoView({ behavior: "smooth" });
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
              <h2>Welcome to 1811Construction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a onClick={handleScroll} href="#contact" className="btn-get-started plain">
                Get Started
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
        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
        </div>

        <div className="carousel-item active">
          <img src="/assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
        </div>

        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
        </div>

        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-4.jpg" alt="" />
        </div>

        <div className="carousel-item">
          <img src="/assets/img/hero-carousel/hero-carousel-5.jpg" alt="" />
        </div>

        <a
          className="carousel-control-prev plain"
          href="#about"
          role="button"
          data-bs-slide="prev"
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
