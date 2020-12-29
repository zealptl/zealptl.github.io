import React from 'react';

const HomeLogo = () => {
  return (
    <div className='home-logo-outer'>
      <div className='home-logo-inner'>
        <svg
          width='240'
          height='480'
          viewBox='0 0 240 480'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='home-logo'
        >
          <g filter='url(#filter0_d)'>
            <path
              d='M233.068 357.347C233.068 372.388 230.106 387.281 224.35 401.177C218.594 415.073 210.158 427.7 199.522 438.335C188.887 448.971 176.261 457.407 162.365 463.163C148.469 468.919 133.575 471.881 118.534 471.881L118.534 357.347L233.068 357.347Z'
              fill='#333333'
            />
            <path
              d='M118.534 471.882C103.493 471.882 88.5998 468.919 74.7039 463.163C60.8079 457.407 48.1818 448.971 37.5463 438.335C26.9108 427.7 18.4742 415.074 12.7184 401.178C6.96248 387.282 3.99998 372.388 4 357.347L118.534 357.347V471.882Z'
              fill='#A7CECB'
            />
            <path
              d='M120.825 271.065V311.533H80.3564L120.825 271.065Z'
              fill='#A7CECB'
            />
            <path
              d='M233.069 311.533H120.825V271.064L233.069 158.821V311.533Z'
              fill='#333333'
            />
            <path
              d='M4 158.821V311.533L120.825 194.327V158.821H4Z'
              fill='#A7CECB'
            />
            <path
              d='M156.713 158.821H120.825V194.327L156.713 158.821Z'
              fill='#333333'
            />
            <path
              d='M120.825 6.10352e-05C135.866 6.12145e-05 150.76 2.96258 164.656 8.71847C178.552 14.4744 191.178 22.9109 201.813 33.5464C212.449 44.1819 220.885 56.808 226.641 70.704C232.397 84.5999 235.359 99.4935 235.359 114.534L120.825 114.534V6.10352e-05Z'
              fill='#333333'
            />
            <path
              d='M6.29102 114.534C6.29102 99.4934 9.25353 84.5999 15.0094 70.7039C20.7653 56.808 29.2018 44.1818 39.8373 33.5463C50.4728 22.9108 63.099 14.4743 76.9949 8.7184C90.8909 2.96251 105.784 -1.97237e-06 120.825 0L120.825 114.534H6.29102Z'
              fill='#A7CECB'
            />
          </g>
          <defs>
            <filter
              id='filter0_d'
              x='0'
              y='0'
              width='239.359'
              height='479.882'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
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
      </div>
    </div>
  );
};

export default HomeLogo;
