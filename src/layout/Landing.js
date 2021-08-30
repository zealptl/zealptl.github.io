import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeLogo from '../components/HomeLogo';
import HomeText from '../components/HomeText';

const Landing = () => {
	return (
		<Grid container className='home-page' id='home'>
			<Grid item xs={12} md={5} lg={5}>
				<HomeLogo />
			</Grid>
			<Grid item xs={12} md={7} lg={7}>
				<HomeText />
			</Grid>
		</Grid>
	);
};

export default Landing;
