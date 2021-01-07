import React from 'react';

const FooterLink = (props) => {
  const Icon = props.icon;
  return props.download ? (
    <a
      href={props.to}
      target='_blank'
      rel='noreferrer'
      download={props.download}
      className='footer-link'
    >
      <Icon className='footer-icon' />
      <p>{props.heading}</p>
    </a>
  ) : (
    <a href={props.to} target='_blank' rel='noreferrer' className='footer-link'>
      <Icon />
      <p>{props.heading}</p>
    </a>
  );
};

export default FooterLink;
