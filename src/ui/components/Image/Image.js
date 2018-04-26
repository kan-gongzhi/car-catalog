import React from 'react';
import './Image.css';
import placeholder from './car-placeholder.png';

export const handleError = e => {
  e.target.src = placeholder;
};
const Image = ({ src, className = '' }) => (
  <img src={src} className={`Image ${className}`} onError={handleError} />
);

export default Image;
