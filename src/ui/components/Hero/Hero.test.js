import React from 'react';
import Hero from './Hero';
import { shallow } from 'enzyme';

describe('<Hero />', () => {
  it('renders', () => {
    shallow(<Hero />);
  });
});
