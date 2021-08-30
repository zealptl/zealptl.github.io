import React from 'react';
import myImg from '../assets/my_img.jpg';

const AboutImg = () => {
	return (
		<div className='about-img-wrapper'>
			<div className='about-img-outer'>
				<div className='about-img-inner'>
					<img src={myImg} alt='' className='about-img' />
				</div>
			</div>
		</div>
	);
};

export default AboutImg;
