import React from 'react';
import { Grid } from '@material-ui/core';

import Nav from './Nav';
import ProjectHighLight from '../components/ProjectHighlight';
import ProjectDescription from '../components/ProjectDescription';

const ProjectDetails = (props) => {
	return (
		<div>
			<Nav />
			<Grid container>
				<Grid item xs={5}>
					<ProjectHighLight
						title={props.title}
						techStack={props.techStack}
						year={props.year}
					/>
				</Grid>
				<Grid item xs={7}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};

export default ProjectDetails;
