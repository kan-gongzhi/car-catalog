import React from 'react';
import { formattedMoney } from '../../../helpers/formatters';
import './carOfTheWeek.css';
import Hero from '../../components/Hero/Hero';

const CarOfTheWeek = ({ car: { imageUrl, name, review, price, makeName } }) => (
  <Hero imageUrl={imageUrl}>
    <div className={'flex justify-center Car-of-the-week__car-details'}>
      <p>{name}</p>
      <p>{makeName}</p>
      <p>{`$${formattedMoney(price)}`}</p>
    </div>
    <blockquote className={'Car-of-the-week__container'}>
      <q>{review}</q>
    </blockquote>
  </Hero>
);

export default CarOfTheWeek;
