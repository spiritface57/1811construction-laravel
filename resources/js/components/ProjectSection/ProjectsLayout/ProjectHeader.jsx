import React from "react";
import banner from "../../../assets/img/page-title-bg.jpg";
function ProjectHeader() {
  return (
    <>
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
              <li className="current">Projects</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}

export default ProjectHeader;
