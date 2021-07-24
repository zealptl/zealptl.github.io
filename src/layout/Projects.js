import React from 'react';
import { Grid } from '@material-ui/core';

import ProjectPreview from '../components/ProjectPreview';
import epsilonImg from '../assets/epsilon.png';
import budgetImg from '../assets/budget.png';
import ccny_coursesImg from '../assets/ccny_courses.png';
import ccny_printingImg from '../assets/ccny_printing.png';
import foodtopiaImg from '../assets/foodtopia.png';
import hacktechImg from '../assets/hacktech.png';

const Projects = () => {
	const projects = [
		{
			title: 'Project Epsilon',
			image: epsilonImg,
			to: '/projects/epsilon',
		},
		{
			title: 'Foodtopia',
			image: foodtopiaImg,
			to: '/projects/foodtopia',
		},
		{
			title: 'Bud-Get',
			image: budgetImg,
			to: '/projects/bud-get',
		},
		{
			title: 'Hacktech 2020',
			image: hacktechImg,
			to: '/projects/hacktech',
		},
		{
			title: 'CCNY Printing',
			image: ccny_printingImg,
			to: '/projects/ccny-printing',
		},
		{
			title: 'CCNY Courses',
			image: ccny_coursesImg,
			to: '/projects/ccny-courses',
		},
	];

	return (
		<Grid
			container
			className='projects-page'
			alignItems='center'
			justify='center'
			id='projects'
		>
			<h1 className='projects-page-heading'>Projects</h1>
			<Grid className='projects-section-dark' item xs={6}></Grid>
			<Grid className='projects-section-light' item xs={6}></Grid>
			{projects.map((project) => (
				<Grid item xs={7}>
					<ProjectPreview
						title={project.title}
						image={project.image}
						to={project.to}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Projects;
