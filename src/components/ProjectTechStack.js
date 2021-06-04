import React from 'react';

const ProjectTechStack = (props) => {
	return (
		<div className='project-tech-stack-year-container'>
			<p className='project-tech-stack-heading'>Tech Stack</p>
			<ul className='tech-stack-list'>
				{props.techStack.map((tech) => (
					<li>{tech}</li>
				))}
			</ul>

			<p className='project-year-heading'>Year</p>
			<p className='project-year'>{props.year}</p>
		</div>
	);
};

export default ProjectTechStack;
