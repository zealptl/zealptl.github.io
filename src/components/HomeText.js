import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import animationTimes from '../constants/animationTimes';

const HomeText = () => {
	const homeTextZeal = useRef();
	const homeTextPatel = useRef();

	useEffect(() => {
		gsap.from(homeTextZeal.current, {
			duration: animationTimes.homeTextDuration,
			opacity: 0,
			translateY: '-200px',
			ease: 'back.out(1.7)',
			delay: animationTimes.logoAnimationTotal,
		});
		gsap.from(homeTextPatel.current, {
			duration: animationTimes.homeTextDuration,
			opacity: 0,
			translateY: '200px',
			ease: 'back.out(1.7)',
			delay: animationTimes.logoAnimationTotal,
		});
	});

	return (
		<div className='home-text'>
			<h1 ref={homeTextZeal} className='home-text-zeal'>
				Zeal
			</h1>
			<h1 ref={homeTextPatel} className='home-text-patel'>
				Patel
			</h1>
		</div>
	);
};

export default HomeText;
