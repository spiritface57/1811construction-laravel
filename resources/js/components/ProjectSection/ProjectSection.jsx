import React from "react";
import ProjectMainSection from "./ProjectsLayout/ProjectMainSection";
import ProjectMainPageHeader from "./ProjectsLayout/ProjectMainPageHeader";
import ProjectHeader from "./ProjectsLayout/ProjectHeader";


function ProjectSection(location) {

  return (
    <section className="projects section">
      {location.location==="main" ? <ProjectMainPageHeader /> : <ProjectHeader />}
      <ProjectMainSection location={location.location} />
    </section>
  );
}

export default ProjectSection;
