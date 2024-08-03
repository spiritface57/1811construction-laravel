import React, { useRef } from "react";
import banner from "../../../assets/img/page-title-bg.jpg";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "./projects.css";
import { projects } from "../../../data/projects.jsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => String(item.id) === String(id));
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" ">
      <div
        className="page-title dark-background"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Fixes the background image
          minHeight: "200px", // Adjust height as needed
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "20px",
          marginTop: "-60px",
        }}
      >
        <div
          className="container position-relative"
          style={{
            marginTop: "200px",
          }}
        >
          <h1>Projects</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "var(--accent-color)",
                  }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="current">
                <a
                  style={{
                    textDecoration: "none",
                    color: "var(--accent-color)",
                  }}
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li className="current">{project.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="project-details" className="project-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              effect="fade"
              className="projectSwipper"
            >
              
              {project.images.map((image,index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={image} alt={image} />
                  </SwiperSlide>
                );
              })}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>

            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> {project.category}
                  </li>
                  <li>
                    <strong>Client</strong> {project.clientname}
                  </li>
                  <li>
                    <strong>Project Location</strong> {project.projectlocation}
                  </li>
                  <li>
                    <strong>Project Price</strong> {project.projectprice}
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="btn-visit align-self-start w-100 text-center"
                      style={{ textDecoration: "none" }}
                    >
                      All Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
