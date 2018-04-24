import React from 'react';
import { formattedMoney } from '../../../helpers/formatters';
import Hero from '../../components/Hero/Hero';
import './ModelDetails.css';

const ModelDetails = ({
  car: { imageUrl = '', name = '', price = '', make = '' }
}) => (
  <Hero imageUrl={imageUrl}>
    <div className={'Model-details__text flex justify-around'}>
      <p>{name}</p>
      <p>{make}</p>
      <p>{`$${formattedMoney(price)}`}</p>
    </div>
  </Hero>
);

export default ModelDetails;
