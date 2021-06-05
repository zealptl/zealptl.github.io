import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import HomeLink from './HomeLink';

const NextProjectDetailPage = (props) => {
	return (
		<div className='next-project-detail-page-container'>
			<p style={{ fontWeight: 300 }}>See also</p>

			<Link className='next-project-detail-page-link' to={props.nextProject}>
				Next Project
				<ArrowRightAltIcon className='next-project-icon' />
				<div className='next-project-detail-link-underline'></div>
			</Link>

			<HomeLink to='/' heading='Home' />
		</div>
	);
};

export default NextProjectDetailPage;
