import React from 'react';
import { formattedMoney } from '../../../helpers/formatters';

const CarOfTheWeek = ({ car = {} }) => (
  <div>
    {console.log(car)}
    <div>{car.name}</div>
    <div>{car.review}</div>
    <div>{formattedMoney(car.price)}</div>
  </div>
);

export default CarOfTheWeek;
