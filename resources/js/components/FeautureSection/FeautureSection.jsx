import './feauture.css';
import React,{useState} from "react";
import { feautures } from "../../data/feautures";
function FeautureSection() {
  const [activeTab, setActiveTab] = useState(feautures[0].tab.target);
  return (
    <section id="features" className="features section">
      <div className="container">
        <ul
          className="nav nav-tabs row g-2 d-flex border-bottom-1 border-light"
          data-aos="fade-up"
          data-aos-delay="100"
          role="tablist"
        >
          {feautures.map((tabItem) => (
            <li className="nav-item col-2" role="presentation" key={tabItem.id}>
              <a
                className={`nav-link ${
                  activeTab === tabItem.tab.target ? "active show" : ""
                }`}
                data-bs-toggle="tab"
                data-bs-target={`#${tabItem.tab.target}`}
                aria-selected={activeTab === tabItem.tab.target}
                role="tab"
                onClick={() => setActiveTab(tabItem.tab.target)}
                href="."
              >
                <h4>{tabItem.tab.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {feautures.map((tabItem,index) => (
            <div
              className={`tab-pane p-5 rounded fade ${
                activeTab === tabItem.tab.target ? "active show" : ""
              }`}
              id={tabItem.tab.target}
              role="tabpanel"
              key={tabItem.id}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>{tabItem.content.title}</h3>
                  <p className="fst-italic">{tabItem.content.description}</p>
                  <ul>
                    {tabItem.content.points.map((point) => (
                      <li key={point.id}>
                        <i className="bi bi-check2-all"></i>{" "}
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src={tabItem.content.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeautureSection;
