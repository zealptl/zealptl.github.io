import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EpsilonDashboard from '../assets/epsilon_dashboard.png';
import EpsilonGroupChat from '../assets/epsilon_groupchat.png';
import EpsilonSignIn from '../assets/epsilon_signin.png';
import EpsilonSignUp from '../assets/epsilon_signup.png';

import FoodtopiaHome from '../assets/foodtopia_home.png';
import FoodtopiaMenu from '../assets/foodtopia_menu.png';
import FoodtopiaCustomerDashboard from '../assets/foodtopia_customer_dashboard.png';
import FoodtopiaCustomerCart from '../assets/foodtopia_customer_cart.png';
import FoodtopiaChefRecipes from '../assets/foodtopia_chef_recipes.png';
import FoodtopiaChefOrders from '../assets/foodtopia_chef_orders.png';
import FoodtopiaManager from '../assets/foodtopia_manager.png';
import FoodtopiaDelivery from '../assets/foodtopia_delivery.png';

import BudGetDashboardDark from '../assets/budget_dashboard_black.png';
import BudGetDashboardLight from '../assets/budget_dashboard_light.png';
import BudGetQuickAdd from '../assets/budget_quick_add.png';

import HackTech from '../assets/hacktech.png';
import HackTechTips from '../assets/hacktech_tips.png';

import CCNYPrintingChart from '../assets/ccny_printing_chart.png';
import CCNYPrintingPrint from '../assets/ccny_printing_print.png';
import CCNYPrintingStudent from '../assets/ccny_printing_student.png';

import CCNYCourses from '../assets/ccny_courses.png';

import ProjectDetails from '../layout/ProjectDetails';

const ProjectPages = () => {
	const epsilonPage = () => (
		<ProjectDetails
			title='Project Epsilon'
			techStack={['JavaScript', 'Node', 'React', 'PostgreSQL']}
			year='2021'
			images={[
				{
					img: EpsilonDashboard,
					title: 'Dashboard',
				},
				{
					img: EpsilonGroupChat,
					title: 'Group chat',
				},
				{
					img: EpsilonSignIn,
					title: 'Sign In',
				},
				{
					img: EpsilonSignUp,
					title: 'Sign Up',
				},
			]}
			nextProject='/projects/foodtopia'
		/>
	);
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
					img: FoodtopiaHome,
					title: 'Home',
				},
				{
					img: FoodtopiaMenu,
					title: 'Menu',
				},
				{
					img: FoodtopiaCustomerDashboard,
					title: 'Customer Dashboard',
				},
				{
					img: FoodtopiaCustomerCart,
					title: 'Customer Cart',
				},
				{
					img: FoodtopiaChefRecipes,
					title: "Chef's Recipes",
				},
				{
					img: FoodtopiaChefOrders,
					title: "Chef's Orders ",
				},
				{
					img: FoodtopiaManager,
					title: 'Manager Dashboard',
				},
				{
					img: FoodtopiaDelivery,
					title: 'Delivery Dashboard',
				},
				{
					img: FoodtopiaChefRecipes,
					title: "Chef's Recipes",
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
					img: BudGetDashboardDark,
					title: 'Dashboard - Dark mode',
				},
				{
					img: BudGetDashboardLight,
					title: 'Dashboard - Light mode',
				},
				{
					img: BudGetQuickAdd,
					title: 'Quick Add',
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
					img: HackTech,
					title: 'Home',
				},
				{
					img: HackTechTips,
					title: 'Tips',
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
					img: CCNYPrintingChart,
					title: 'Printers chart',
				},
				{
					img: CCNYPrintingStudent,
					title: 'Student Home Page',
				},
				{
					img: CCNYPrintingPrint,
					title: 'Student Print Menu',
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
					img: CCNYCourses,
					title: 'Home',
				},
			]}
			nextProject='/projects/epsilon'
		/>
	);

	return (
		<Switch>
			<Route exact path='/projects/epsilon' component={epsilonPage} />
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
