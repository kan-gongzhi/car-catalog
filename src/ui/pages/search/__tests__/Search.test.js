import React from 'react';
import { shallow } from 'enzyme';
import Search, { Col, Row } from '../Search';

describe('Helpers', () => {
  it('<Col />renders', () => {
    shallow(<Col />);
  });
  it('<Row />renders', () => {
    shallow(<Row />);
  });
});

describe('<Search />', () => {
  it('renders', () => {
    shallow(<Search />);
  });
});
