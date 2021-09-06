import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutDescription = () => {
	gsap.registerPlugin(ScrollTrigger);
	const aboutDescription = useRef();
	const aboutDescriptionText = useRef();
	const aboutSectionHeading = useRef();

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: aboutDescription.current,
					start: 'top center',
				},
			})
			.from(aboutDescription.current, {
				duration: 0.5,
				height: '20vh',
			})
			.from(aboutDescriptionText.current, {
				duration: 0.5,
				translateY: '150px',
				opacity: 0,
			})
			.from(aboutSectionHeading.current, {
				duration: 0.2,
				opacity: 0,
			});
	});

	return (
		<div ref={aboutDescription} className='about-description'>
			<h1 ref={aboutSectionHeading} className='about-section-heading'>
				About
			</h1>
			<div
				ref={aboutDescriptionText}
				className='about-description-text-container'
			>
				<p className='about-description-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<br />
				<p className='about-description-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
};

export default AboutDescription;
