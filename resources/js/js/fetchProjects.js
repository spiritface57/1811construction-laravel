// src/api.js
import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('/list_projects');
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    return [];
  }
};
