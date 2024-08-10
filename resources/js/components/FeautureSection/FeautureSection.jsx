import "./feauture.css"; // Ensure correct path to your CSS file
import React from "react";
import { features } from "../../data/feautures"; // Ensure correct path to your data file

function FeatureSection() {
    return (
        <section id="features" className="features section">
            <div className="container">
                {/* Main section title and description */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>{features.mainSection.title}</h2>
                    <p>{features.mainSection.description}</p>
                </div>
                <div className="row">
                    {/* Iterate over features items */}
                    {features.items.map((item) => (
                        <div className="col-lg-6 col-sm-12 mb-4" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.content.image}
                                    alt={item.content.title}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {item.content.title}
                                    </h5>
                                    <p className="card-text">
                                        {item.content.description}
                                    </p>
                                    <ul>
                                        {item.content.points.map((point) => (
                                            <li key={point.id}>
                                                <i className="bi bi-check2-all"></i>{" "}
                                                <span>{point.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
