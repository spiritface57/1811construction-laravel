import React from "react";
import { useRefs } from '../context/RefsContex';
import Hero from "./Hero/Hero";
import ConstructionSection from "./ConstructionSection/ConstructionSection";
import Services from "./Services/Services";
import AltServices from "./AltServices/AltServices";
import FeautureSection from "./FeautureSection/FeautureSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import StartedSection from "./StartedSecrion/StartedSection";

const Main = () => {
  const refs=useRefs()
  return (
    <>
      <div id="home" ref={refs.home}>
          <Hero refs={refs} />
        </div>
      <div id="aboutus" ref={refs.aboutus}>
        <ConstructionSection />
      </div>
      <div id="services" ref={refs.services}>
        <Services />
      </div>
      <div id="alt-services" ref={refs.altServices}>
        <AltServices />
      </div>
      <div id="features" ref={refs.features}>
        <FeautureSection />
      </div>
      <div id="projects" ref={refs.projects}>
        <ProjectSection location={'main'}/>
      </div>
      <div id="contact" ref={refs.contact}>
        <StartedSection />
      </div>
    </>
  );
};

export default Main;
