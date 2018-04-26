import React from 'react';
import { shallow } from 'enzyme';
import CarOfTheWeek from './CarOfTheWeek';

describe('<CarOfTheWeek />', () => {
  it('renders', () => {
    shallow(<CarOfTheWeek car={{}}/>);
  });
});
