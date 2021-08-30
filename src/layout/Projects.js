import React from 'react';
import { Grid } from '@material-ui/core';

import ProjectPreview from '../components/ProjectPreview';
import EpsilonDashboardImg from '../assets/epsilon_dashboard.png';
import FoodtopiaHomeImg from '../assets/foodtopia_home.png';
import BudGetDashboardImg from '../assets/budget_dashboard_black.png';
import HackTechImg from '../assets/hacktech.png';
import CCNYPrintingImg from '../assets/ccny_printing_chart.png';
import CCNYCoursesImg from '../assets/ccny_courses.png';

const Projects = () => {
	const projects = [
		{
			title: 'Project Epsilon',
			image: EpsilonDashboardImg,
			to: '/projects/epsilon',
		},
		{
			title: 'Foodtopia',
			image: FoodtopiaHomeImg,
			to: '/projects/foodtopia',
		},
		{
			title: 'Bud-Get',
			image: BudGetDashboardImg,
			to: '/projects/bud-get',
		},
		{
			title: 'Hacktech 2020',
			image: HackTechImg,
			to: '/projects/hacktech',
		},
		{
			title: 'CCNY Printing',
			image: CCNYPrintingImg,
			to: '/projects/ccny-printing',
		},
		{
			title: 'CCNY Courses',
			image: CCNYCoursesImg,
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
