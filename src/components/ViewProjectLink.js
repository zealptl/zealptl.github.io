import React from 'react';
import { Link } from 'react-router-dom';

const ViewProjectLink = (props) => {
  return (
    <div className='view-project-link-container'>
      <Link to='/projects/foodtopia' className='view-project-link'>
        View Project
      </Link>
    </div>
  );
};

export default ViewProjectLink;
