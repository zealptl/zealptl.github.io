import React from 'react';
import { Grid } from '@material-ui/core';

import Nav from './Nav';
import ProjectHighLight from '../components/ProjectHighlight';
import ProjectDescription from '../components/ProjectDescription';
import ProjectDetailImage from '../components/ProjectDetailImage';
import Footer from './Footer';
import NextProjectDetailPage from '../components/NextProjectDetailPage';

const ProjectDetails = (props) => {
	return (
		<div>
			<Nav />
			<Grid container>
				<Grid item xs={12} md={5} lg={5}>
					<ProjectHighLight
						title={props.title}
						techStack={props.techStack}
						year={props.year}
					/>
				</Grid>
				<Grid item xs={12} md={7} lg={7}>
					<ProjectDescription />
				</Grid>
			</Grid>

			<Grid
				container
				alignItems='center'
				justify='center'
				className='project-detail-images'
			>
				<Grid item xs={9} md={7} lg={7}>
					{props.images.map((image) => (
						<ProjectDetailImage title={image.title} img={image.img} />
					))}
				</Grid>
			</Grid>

			<div className='next-project-detail-link-wrapper'>
				<Grid
					container
					alignItems='center'
					justify='center'
					className='next-project-detail-link-container'
				>
					<Grid item xs={12}>
						<NextProjectDetailPage nextProject={props.nextProject} />
					</Grid>
				</Grid>
			</div>

			<Footer type='light' />
		</div>
	);
};

export default ProjectDetails;
