import React from 'react';
import CenteredContainer from '../../components/CenteredContainer/CenteredContainer';
import { formattedMoney } from '../../../helpers/formatters';

const ModelDetails = ({
  car: { imageUrl = '', name = '', price = '', make = '' }
}) => (
  <CenteredContainer>
    <div>
      <img src={imageUrl} />
    </div>
    <div>{name}</div>
    <div>{make}</div>
    <div>{`$${formattedMoney(price)}`}</div>
  </CenteredContainer>
);

export default ModelDetails;
