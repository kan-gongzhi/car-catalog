import React from 'react';
import './Image.css';

const Image = ({ src, className = '', errorImage = null }) => (
  <img
    src={src}
    className={`Image ${className}`}
    onError={e => {
      e.target.src = errorImage || 'http://via.placeholder.com/350x150';
    }}
  />
);

export default Image;
