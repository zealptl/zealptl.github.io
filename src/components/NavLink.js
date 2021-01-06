import React from 'react';

const NavLink = (props) => {
  return props.download ? (
    <a href={props.to} className='nav-link' download={props.download}>
      {props.heading}
      <div className='nav-link-underline'></div>
    </a>
  ) : (
    <a href={props.to} className='nav-link'>
      {props.heading}
      <div className='nav-link-underline'></div>
    </a>
  );
};

export default NavLink;
