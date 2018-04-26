import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  it('renders', () => {
    shallow(<Select />);
    shallow(
      <Select className={'some-class-name'} placeHolder={'some place holder'} />
    );
    shallow(<Select options={[{ id: 1, name: '1' }]} />);
  });
});
