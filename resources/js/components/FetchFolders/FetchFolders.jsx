import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get('/api/listFolders');
        setFolders(response.data);
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    };

    fetchFolders();
  }, []);

  const renderFilesAndFolders = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.type === 'directory' ? (
              <div>
                <strong>{item.name}</strong>
                {item.contents && renderFilesAndFolders(item.contents)}
              </div>
            ) : (
              <div>{item.name}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Project Folders and Files</h2>
      {renderFilesAndFolders(folders)}
    </div>
  );
};

export default ProjectList;

