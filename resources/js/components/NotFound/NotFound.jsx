// NotFound.js
import React from "react";
import banner from "../../assets/img/banner1.jpg";



const NotFound = () => {
  
  
  return (
    <section
      className="hero section dark-background"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Ensure the section covers the full viewport height
      }}
    >
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error-page text-center">
                <div className="error-code">
                  <h2>
                    <strong>404</strong>
                  </h2>
                </div>
                <div className="error-message">
                  <h3>Oops... Page Not Found!</h3>
                </div>
                <div className="error-body">
                  <p className="error-body my-5">
                    Try using the button below to go to main page of the site
                  </p>

                  <a href="/" className="btn-get-started plain">
                    Back To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
