import React from 'react';
import { formattedMoney } from '../../../helpers/formatters';
import CenteredContainer from '../../components/CenteredContainer/CenteredContainer';

const CarOfTheWeek = ({ car: { imageUrl, name, review, price } }) => (
  <CenteredContainer>
    <div>
      <img src={imageUrl} />
    </div>
    <div>{name}</div>
    <blockquote className={'Car-of-the-week__container'}>
      <q>{review}</q>
    </blockquote>
    <div>{`$${formattedMoney(price)}`}</div>
  </CenteredContainer>
);

export default CarOfTheWeek;
