import React from 'react';

const NavLink = (props) => {
  return (
    <a href={`${props.to.toString().toLowerCase()}`} className='nav-link'>
      {props.to}
      <div className='nav-link-underline'></div>
    </a>
  );
};

export default NavLink;
