import React from 'react';
import Navigation from 'react-sticky-nav';

import NavLink from '../components/NavLink';
import resume from '../assets/Zeal_Patel_Resume.pdf';

const Nav = () => {
  const links = [
    {
      to: 'about',
      heading: 'About',
    },
    {
      to: resume,
      heading: 'Resume',
      download: 'Zeal_Patel_Resume.pdf',
    },
    {
      to: 'skills',
      heading: 'Skills',
    },
    {
      to: 'projects',
      heading: 'Projects',
    },
    {
      to: 'contact',
      heading: 'Contact',
    },
  ];
  return (
    <Navigation className='main-nav'>
      <ul>
        {links.map((link) => (
          <li>
            <NavLink
              to={link.to}
              heading={link.heading}
              download={link.download}
            />
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Nav;
