import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FoodtopiaImg from '../assets/foodtopia.png';
import BudGetImg from '../assets/budget.png';
import HacktechImg from '../assets/hacktech.png';
import CCNYPrintingImg from '../assets/ccny_printing.png';
import CCNYCoursesImg from '../assets/ccny_courses.png';

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
			images={[
				{
					img: FoodtopiaImg,
					title: 'Customer Dashboard',
				},
				{
					img: FoodtopiaImg,
					title: 'Customer Dashboard',
				},
				{
					img: FoodtopiaImg,
					title: 'Customer Dashboard',
				},
				{
					img: FoodtopiaImg,
					title: 'Customer Dashboard',
				},
			]}
			nextProject='/projects/bud-get'
		/>
	);
	const budGetPage = () => (
		<ProjectDetails
			title='Bud-Get'
			techStack={['JavaScript', 'Express', 'React', 'MongoDB']}
			year='2020'
			images={[
				{
					img: BudGetImg,
					title: 'Customer Dashboard',
				},
				{
					img: BudGetImg,
					title: 'Customer Dashboard',
				},
				{
					img: BudGetImg,
					title: 'Customer Dashboard',
				},
				{
					img: BudGetImg,
					title: 'Customer Dashboard',
				},
			]}
			nextProject='/projects/hacktech'
		/>
	);
	const hacktechPage = () => (
		<ProjectDetails
			title='HackTech'
			techStack={['HTML / CSS', 'JavaScript', 'Firebase']}
			year='2020'
			images={[
				{
					img: HacktechImg,
					title: 'Customer Dashboard',
				},
				{
					img: HacktechImg,
					title: 'Customer Dashboard',
				},
				{
					img: HacktechImg,
					title: 'Customer Dashboard',
				},
				{
					img: HacktechImg,
					title: 'Customer Dashboard',
				},
			]}
			nextProject='/projects/ccny-printing'
		/>
	);
	const ccnyPrintingPage = () => (
		<ProjectDetails
			title='CCNY Printing'
			techStack={['C++']}
			year='2019'
			images={[
				{
					img: CCNYPrintingImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYPrintingImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYPrintingImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYPrintingImg,
					title: 'Customer Dashboard',
				},
			]}
			nextProject='/projects/ccny-courses'
		/>
	);
	const ccnyCoursesPage = () => (
		<ProjectDetails
			title='CCNY Courses'
			techStack={['Java', 'JavaFX', 'MySQL']}
			year='2020'
			images={[
				{
					img: CCNYCoursesImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYCoursesImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYCoursesImg,
					title: 'Customer Dashboard',
				},
				{
					img: CCNYCoursesImg,
					title: 'Customer Dashboard',
				},
			]}
			nextProject='/projects/foodtopia'
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
