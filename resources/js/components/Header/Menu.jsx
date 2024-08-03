import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRefs } from '../../context/RefsContex'; // Adjust import path as needed

function Menu({ items }) {
  const [activeItem, setActiveItem] = useState('home');
  const  refs  = useRefs();
  const navigate = useNavigate();

  const handleLinkClick = (itemId) => {
    setActiveItem(itemId);
    
    // Navigate to the route
    navigate('/', { replace: true });

    // Use a timeout to allow the page to render before scrolling
    setTimeout(() => {
      if (refs[itemId] && refs[itemId].current) {
        refs[itemId].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500); // Adjust the timeout duration if necessary
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.subItems && item.subItems.length > 0) {
        return (
          <li className="dropdown" key={item.id}>
            <button
              id={item.id}
              className={`menutoggle ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              <span>{item.label}</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </button>
            <ul>{renderMenuItems(item.subItems)}</ul>
          </li>
        );
      }

      return (
        <li key={item.id}>
          <Link
            to="#"
            id={item.id}
            className={`menutoggle ${activeItem === item.id ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleLinkClick(item.id);
            }}
          >
            {item.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <nav id="navmenu" className="navmenu">
      <ul>{renderMenuItems(items)}</ul>
    </nav>
  );
}

export default Menu;
