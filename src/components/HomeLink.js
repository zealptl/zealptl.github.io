import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const HomeLink = (props) => {
	return (
		<Link to={props.to} className='home-link'>
			<ArrowRightAltIcon className='home-link-icon' />
			{props.heading}
			<div className='home-link-underline'></div>
		</Link>
	);
};

export default HomeLink;
