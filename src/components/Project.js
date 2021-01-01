import React from 'react';

const Project = (props) => {
  return (
    <div className='project-container'>
      <h1 className='project-title-fill'>{props.title}</h1>
      <h1 className='project-title-border'>{props.title}</h1>
      <img src={props.image} alt='' className='project-image' />
    </div>
  );
};

export default Project;
