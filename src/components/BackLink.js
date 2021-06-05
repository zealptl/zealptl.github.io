import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const BackLink = (props) => {
	return (
		<Link to={props.to} className='back-link'>
			<ArrowRightAltIcon className='back-icon' />
			{props.heading}
			<div className='back-link-underline'></div>
		</Link>
	);
};

export default BackLink;
