import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('<Nav />', () => {
  it('renders', () => {
    shallow(<Nav />);
    shallow(<Nav className={'some-class-name'} />);
  });
});
