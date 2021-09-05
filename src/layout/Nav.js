import React, { useRef, useEffect } from 'react';
import Navigation from 'react-sticky-nav';
import gsap from 'gsap';
import NavLink from '../components/NavLink';
import resume from '../assets/Zeal_Patel_Resume.pdf';
import animationTimes from '../constants/animationTimes';

const Nav = () => {
	const links = [
		{
			to: 'about',
			heading: 'About',
		},
		{
			to: resume,
			heading: 'Resume',
			download: 'Zeal_Patel_Resume.pdf',
		},
		{
			to: 'skills',
			heading: 'Skills',
		},
		{
			to: 'projects',
			heading: 'Projects',
		},
		{
			to: 'contact',
			heading: 'Contact',
		},
	];

	const linksRef = useRef();

	useEffect(() => {
		gsap.from(linksRef.current, {
			duration: animationTimes.navDuration,
			translateY: '-100px',
			opacity: 0,
			delay:
				animationTimes.logoAnimationTotal +
				animationTimes.homeTextAnimationTotal,
		});
	});

	return (
		<Navigation className='main-nav'>
			<ul ref={linksRef}>
				{links.map((link) => (
					<li>
						<NavLink
							to={link.to}
							heading={link.heading}
							download={link.download}
						/>
					</li>
				))}
			</ul>
		</Navigation>
	);
};

export default Nav;
