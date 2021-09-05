import React from 'react';

const ProjectDetailImage = (props) => {
	return (
		<div item xs={7} className='project-container'>
			<p className='project-detail-image-title'>{props.title}</p>
			<img src={props.img} alt='' className='project-image' />
		</div>
	);
};

export default ProjectDetailImage;
