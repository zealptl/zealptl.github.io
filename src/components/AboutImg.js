import React from 'react';
import myImg from '../assets/my_img.JPG';

const AboutImg = () => {
  return (
    <div className='about-img-outer'>
      <div className='about-img-inner'>
        <img src={myImg} alt='' className='about-img' />
      </div>
    </div>
  );
};

export default AboutImg;
