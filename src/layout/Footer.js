import React from 'react';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import resume from '../assets/Zeal_Patel_Resume.pdf';
import FooterLink from '../components/FooterLink';

const Footer = () => {
  return (
    <Grid container className='footer-container'>
      <Grid
        item
        xs={12}
        alignItems='center'
        justify='center'
        className='footer'
      >
        <FooterLink
          icon={GitHubIcon}
          heading='GitHub'
          to='https://github.com/zealptl'
        />
        <div className='footer-link-border'></div>

        <FooterLink
          icon={LinkedInIcon}
          heading='LinkedIn'
          to='https://www.linkedin.com/in/zealptl/'
        />
        <div className='footer-link-border'></div>

        <FooterLink
          icon={DescriptionIcon}
          heading='Resume'
          to={resume}
          download='Zeal_Patel_Resume.pdf'
        />
      </Grid>
      <Grid item xs={12} className='footer-copyright'>
        <p>Copyright © 2021 by Zeal Patel. All rights reserved.</p>
      </Grid>
    </Grid>
  );
};

export default Footer;
