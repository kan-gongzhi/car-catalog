import React from 'react';
import { shallow } from 'enzyme';
import ModelDetails from './ModelDetails';

describe('<ModelDetails />', () => {
  it('renders', () => {
    shallow(<ModelDetails car={{}} />);
    shallow(
      <ModelDetails car={{ imageUrl: '', name: '', price: '', make: '' }} />
    );
  });
});
