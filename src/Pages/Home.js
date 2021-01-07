import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeLogo from '../components/HomeLogo';
import HomeText from '../components/HomeText';

const Home = () => {
  return (
    <Grid container className='home-page' id='home'>
      <Grid item xs={5}>
        <HomeLogo />
      </Grid>
      <Grid item xs={7}>
        <HomeText />
      </Grid>
    </Grid>
  );
};

export default Home;
