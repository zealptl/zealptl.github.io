import React from 'react';

import BackLink from './BackLink';
import ProjectTechStack from './ProjectTechStack';
import ProjectTitle from './ProjectTitle';

const ProjectHighlight = (props) => {
	return (
		<div className='project-highlight-container'>
			<BackLink to='/' />
			<ProjectTitle>{props.title}</ProjectTitle>
			<ProjectTechStack techStack={props.techStack} year={props.year} />
		</div>
	);
};

export default ProjectHighlight;
