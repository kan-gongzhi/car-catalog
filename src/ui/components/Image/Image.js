import React from 'react';
import './Image.css';

export const handleError = e => {
  e.target.src = 'http://via.placeholder.com/350x150';
};
const Image = ({ src, className = '' }) => (
  <img src={src} className={`Image ${className}`} onError={handleError} />
);

export default Image;
