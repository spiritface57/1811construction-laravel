import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import './services.css';
import { services } from "../../data/services";

function Services() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{services.mainSection.title}</h2>
        <p>{services.mainSection.description}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.items.map((item) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              key={item.id}
            >
              <div
                className="service-item position-relative"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="icon">
                  {React.cloneElement(item.icon, {
                    className: `servicon ${
                      isHovered === item.id ? "hovered" : ""
                    }`,
                  })}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* <a href="." className="readmore stretched-link">
                  Read more <i className="bi bi-arrow-right"></i>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
