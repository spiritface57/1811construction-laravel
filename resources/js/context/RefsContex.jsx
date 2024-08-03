import React, { createContext, useContext, useRef } from 'react';

// Create a Context for the references
const RefsContext = createContext();

// Create a Provider component
export const RefsProvider = ({ children }) => {
  const heroRef = useRef(null);
  const constructionRef = useRef(null);
  const servicesRef = useRef(null);
  const altServicesRef = useRef(null);
  const featureRef = useRef(null);
  const projectsRef = useRef(null);
  const startedRef = useRef(null);

  // Aggregate all refs
  const refs = {
    home: heroRef,
    aboutus: constructionRef,
    services: servicesRef,
    altServices: altServicesRef,
    features: featureRef,
    projects: projectsRef,
    contact: startedRef,
  };

  return (
    <RefsContext.Provider value={refs}>
      {children}
    </RefsContext.Provider>
  );
};

// Create a custom hook to use the RefsContext
export const useRefs = () => useContext(RefsContext);
