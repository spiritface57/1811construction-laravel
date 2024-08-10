import React from 'react';
import 'aos/dist/aos.css';
import './construction.css';
import { about } from '../../data/about.jsx';

const ConstructionSection = () => {
  return (
    <section id="about" className="constructions section">
      <div className="container section-title" data-aos="fade-up">
        <h3>{about.mainSection.title}</h3>
        <p>{about.mainSection.description}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {about.sections.map((item, index) => (
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
              <div className="card-item rounded">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg"><img src={item.image} alt={item.title} /></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConstructionSection;
