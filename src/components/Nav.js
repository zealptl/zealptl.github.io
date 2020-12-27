import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
  const links = ['About', 'Skills', 'Projects', 'Contact'];
  return (
    <ul className='main-nav'>
      {links.map((link) => (
        <li>
          <NavLink to={link} />
        </li>
      ))}
    </ul>
  );
};

export default Nav;
