import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import animationTimes from '../constants/animationTimes';

const HomeLogo = () => {
	const tl = gsap.timeline();
	const homeLogoOuter = useRef();
	const homeLogoInner = useRef();
	const homeLogo = useRef();
	const topSemiCirc = useRef();
	const bottomSemiCirc = useRef();
	const leftTriangle = useRef();
	const rightTriangle = useRef();

	useEffect(() => {
		tl.from(homeLogoOuter.current, {
			duration: animationTimes.homeLogoContainerDuration,
			height: 0,
			opacity: 0,
		})
			.from(homeLogoInner.current, {
				duration: animationTimes.homeLogoContainerDuration,
				height: 0,
				opacity: 0,
			})
			.from(homeLogo.current, {
				duration: animationTimes.homeLogoDuration,
				opacity: 0,
				scale: 5,
				ease: 'back.out(1.7)',
				delay: animationTimes.homeLogoContainerDuration,
			})
			.to(bottomSemiCirc.current, {
				duration: animationTimes.logoSectionsDuration,
				translateY: '130px',
			})
			.to(topSemiCirc.current, {
				duration: animationTimes.logoSectionsDuration,
				translateY: '-130px',
				delay: -animationTimes.logoSectionsDuration,
			})
			.to(leftTriangle.current, {
				duration: animationTimes.logoSectionsDuration,
				translateX: '40px',
			})
			.to(rightTriangle.current, {
				duration: animationTimes.logoSectionsDuration,
				translateX: '-40px',
				delay: -animationTimes.logoSectionsDuration,
			});

		console.log(tl.duration());
	}, [tl]);

	return (
		<div ref={homeLogoOuter} className='home-logo-outer'>
			<div ref={homeLogoInner} className='home-logo-inner'>
				<svg
					ref={homeLogo}
					className='home-logo'
					width='280'
					height='600'
					viewBox='0 0 280 280'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g ref={bottomSemiCirc} filter='url(#filter0_d)'>
						<path
							d='M260 135C260 150.759 256.896 166.363 250.866 180.922C244.835 195.481 235.996 208.71 224.853 219.853C213.71 230.996 200.481 239.835 185.922 245.866C171.363 251.896 155.759 255 140 255C124.241 255 108.637 251.896 94.078 245.866C79.5189 239.835 66.2902 230.996 55.1472 219.853C44.0042 208.71 35.165 195.481 29.1345 180.922C23.1039 166.363 20 150.759 20 135L140 135H260Z'
							fill='#457B9D'
						/>
					</g>
					<g ref={topSemiCirc} filter='url(#filter1_d)'>
						<path
							d='M260 135C260 103.174 247.357 72.6516 224.853 50.1472C202.348 27.6428 171.826 15 140 15C108.174 15 77.6516 27.6428 55.1472 50.1472C32.6428 72.6515 20 103.174 20 135L140 135H260Z'
							fill='#457B9D'
						/>
					</g>
					<g ref={leftTriangle} filter='url(#filter2_d)'>
						<path d='M220 215L220 55L60 215L220 215Z' fill='#457B9D' />
					</g>
					<g ref={rightTriangle} filter='url(#filter3_d)'>
						<path d='M60 55V215L220 55H60Z' fill='#457B9D' />
					</g>
					<defs>
						<filter
							id='filter0_d'
							x='0'
							y='120'
							width='280'
							height='160'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='5' />
							<feGaussianBlur stdDeviation='10' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 0 0.615686 0 0 0 0.4 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
						<filter
							id='filter1_d'
							x='0'
							y='0'
							width='280'
							height='160'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='5' />
							<feGaussianBlur stdDeviation='10' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 0 0.615686 0 0 0 0.4 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
						<filter
							id='filter2_d'
							x='40'
							y='40'
							width='200'
							height='200'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='5' />
							<feGaussianBlur stdDeviation='10' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 0 0.615686 0 0 0 0.4 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
						<filter
							id='filter3_d'
							x='40'
							y='40'
							width='200'
							height='200'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='5' />
							<feGaussianBlur stdDeviation='10' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 0 0.615686 0 0 0 0.4 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
					</defs>
				</svg>

				<div className='home-text-mobile'>
					<p className='home-text-mobile-zeal'>Zeal</p>

					<p className='home-text-mobile-patel'>Patel</p>
				</div>
			</div>
		</div>
	);
};

export default HomeLogo;
