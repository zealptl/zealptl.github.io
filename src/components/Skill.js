import React from 'react';

const Skill = (props) => {
  return (
    <div className='skill-container'>
      <p>{props.title}</p>

      <i class={`${props.icon} skill-icon`}></i>
      <div className='skill-bar-container'>
        <div className='skill-bar' style={{ width: `${props.level}%` }}></div>
      </div>
    </div>
  );
};

export default Skill;
