import React from 'react';

import Nav from '../sections/Nav';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
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
