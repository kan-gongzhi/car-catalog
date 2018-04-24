import React from 'react';
import Image from '../Image/Image';
import './Hero.css';

const Hero = ({ imageUrl, children }) => (
  <div className={'Hero'}>
    <Image src={imageUrl} className={'Hero__Image'} />
    <div className={'Hero_Text-holder-container flex items-center justify-end'}>
      <div className={'Hero__Text-holder flex items-center'}>{children}</div>
    </div>
  </div>
);

export default Hero;
