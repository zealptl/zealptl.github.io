import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectDetails from '../layout/ProjectDetails';

const ProjectPages = () => {
	const foodtopiaPage = () => (
		<ProjectDetails
			title='Foodtopia'
			techStack={[
				'TypeScript (Backend)',
				'JavaScript (Frontend)',
				'Express',
				'React',
				'MongoDB',
			]}
			year='2020'
		/>
	);
	const budGetPage = () => (
		<ProjectDetails
			title='Bud-Get'
			techStack={['JavaScript', 'Express', 'React', 'MongoDB']}
			year='2020'
		/>
	);
	const hacktechPage = () => (
		<ProjectDetails
			title='HackTech'
			techStack={['HTML / CSS', 'JavaScript', 'Firebase']}
			year='2020'
		/>
	);
	const ccnyPrintingPage = () => (
		<ProjectDetails title='CCNY Printing' techStack={['C++']} year='2019' />
	);
	const ccnyCoursesPage = () => (
		<ProjectDetails
			title='CCNY Courses'
			techStack={['Java', 'JavaFX', 'MySQL']}
			year='2020'
		/>
	);

	return (
		<Switch>
			<Route exact path='/projects/foodtopia' component={foodtopiaPage} />
			<Route exact path='/projects/bud-get' component={budGetPage} />
			<Route exact path='/projects/hacktech' component={hacktechPage} />
			<Route
				exact
				path='/projects/ccny-printing'
				component={ccnyPrintingPage}
			/>
			<Route exact path='/projects/ccny-courses' component={ccnyCoursesPage} />
		</Switch>
	);
};

export default ProjectPages;
