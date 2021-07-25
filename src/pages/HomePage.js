import React from 'react';

import Nav from '../layout/Nav';
import Landing from '../layout/Landing';
import About from '../layout/About';
import Skills from '../layout/Skills';
import Projects from '../layout/Projects';
import Contact from '../layout/Contact';
import Footer from '../layout/Footer';
import Alert from '@material-ui/lab/Alert';

const HomePage = () => {
	return (
		<div>
			<Alert severity='info'>This site is still under development.</Alert>
			<Nav />
			<Landing />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer type='dark' />
		</div>
	);
};

export default HomePage;
