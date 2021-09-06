import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import myImg from '../assets/my_img.jpg';

const AboutImg = () => {
	gsap.registerPlugin(ScrollTrigger);
	const aboutImgOuter = useRef();
	const aboutImgInner = useRef();
	const aboutImg = useRef();

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: aboutImgOuter.current,
					start: 'top center',
				},
			})
			.from(aboutImgInner.current, {
				duration: 0.5,
				height: '20vh',
			})
			.from(aboutImg.current, {
				duration: 0.5,
				translateY: '150px',
				opacity: 0,
			});
	});

	return (
		<div className='about-img-wrapper'>
			<div ref={aboutImgOuter} className='about-img-outer'>
				<div ref={aboutImgInner} className='about-img-inner'>
					<img ref={aboutImg} src={myImg} alt='' className='about-img' />
				</div>
			</div>
		</div>
	);
};

export default AboutImg;
