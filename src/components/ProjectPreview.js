import React from 'react';

import ViewProjectLink from './ViewProjectLink';

const ProjectPreview = (props) => {
	return (
		<div className='project-container'>
			<h1 className='project-title-fill'>{props.title}</h1>
			<h1 className='project-title-border'>{props.title}</h1>
			<img src={props.image} alt='' className='project-image' />
			<ViewProjectLink to={props.to} />
		</div>
	);
};

export default ProjectPreview;
