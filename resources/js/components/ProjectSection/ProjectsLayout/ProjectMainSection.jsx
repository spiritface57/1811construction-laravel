import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from '../../../data/projects.jsx';
import { uniqueObjectsByField } from "../../../helpers/helpers";
function ProjectMainSection(location) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    }); 

    // Initialize Isotope
    const isotopeContainer = document.querySelector(".isotope-container");
    let iso;

    imagesLoaded(isotopeContainer, () => {
      iso = new Isotope(isotopeContainer, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: "*",
        sortBy: "original-order",
      });
    });

    // Filter items on filter link click
    document.querySelectorAll(".isotope-filters li").forEach((filter) => {
      filter.addEventListener("click", () => {
        document
          .querySelector(".isotope-filters .filter-active")
          .classList.remove("filter-active");
        filter.classList.add("filter-active");

        iso.arrange({ filter: filter.getAttribute("data-filter") });
      });
    });

    return () => {
      // Cleanup Isotope instance if necessary
      if (iso) iso.destroy();
    };
  }, []);
  const height = location.location === "main" ? "0px" : "70px";
  const uniqueProjects = uniqueObjectsByField(projects, 'category');
  return (
    <>
      <div className="container" style={{ marginTop: `${height}` }}>
        <div
          className="isotope-layout mt-20"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active" key="1">
              All
            </li>
            {uniqueProjects.map((project) => (
              <li data-filter={`.filter-${project.category}`} key={project.id}>
                {project.category}
              </li>
            ))}
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`}
              >
                <div className="portfolio-content h-100">
                  <img
                    src={project.mainImg}
                    className="img-fluid"
                    alt={project.title}
                  />
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p className="text-truncate px-3">{project.description}</p>
                    <a
                      href={`/projects/${project.id}`}
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectMainSection;
