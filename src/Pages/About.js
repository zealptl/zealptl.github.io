import React from 'react';
import { Grid } from '@material-ui/core';

import AboutImg from '../components/AboutImg';
import AboutDescription from '../components/AboutDescription';

const About = () => {
  return (
    <Grid container className='about-page' id='about'>
      <Grid item xs={5}>
        <AboutImg />
      </Grid>
      <Grid item xs={7}>
        <AboutDescription />
      </Grid>
    </Grid>
  );
};

export default About;
