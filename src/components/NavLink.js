import React from 'react';
import { Link } from 'react-scroll';

const NavLink = (props) => {
  return props.download ? (
    <a href={props.to} className='nav-link' download={props.download}>
      {props.heading}
      <div className='nav-link-underline'></div>
    </a>
  ) : (
    <Link
      activeClass='active'
      spy={true}
      smooth={true}
      duration={500}
      to={props.to}
      offset={-50}
      className='nav-link'
    >
      {props.heading}
      <div className='nav-link-underline'></div>
    </Link>
  );
};

export default NavLink;

/*

<Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>

*/
