import React from 'react';
import Image, { handleError } from './Image';
import { shallow } from 'enzyme';

describe('<Image />', () => {
  it('renders', () => {
    shallow(<Image />);
    shallow(<Image className={'some-class-name'} />);
    shallow(<Image src={'invalid'} />);
    shallow(<Image src={'invalid'} className={'some-class-name'} />);
    shallow(
      <Image
        src={'http://via.placeholder.com/350x150'}
        className={'some-class-name'}
      />
    );
  });
  it('handleError() sets src to a url', () => {
    const e = {target: {}};
    handleError(e);
    expect(e.target.src).toBe('http://via.placeholder.com/350x150');
  });
});
