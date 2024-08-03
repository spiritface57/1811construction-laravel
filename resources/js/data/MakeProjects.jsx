
import projectsData from './projects.json';

export const projects = projectsData.flatMap(categoryData => 
    categoryData.projects.map(project => ({
      ...project,
      mainImgSrc: categoryData.mainImgSrc,
      images: categoryData.images
    }))
  );