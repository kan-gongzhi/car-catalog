import React from 'react';
import { shallow } from 'enzyme';
import {
  mapDispatchToProps,
  mapStateToProps,
  ModelDetailsContainer
} from './ModelDetailsContainer';
import configureMockStore from 'redux-mock-store';
import { bindActionCreators } from 'redux';

describe('<ModelDetailsContainer />', () => {
  it('renders', () => {
    shallow(<ModelDetailsContainer car={{}} />);
  });
});

describe('redux connections', () => {
  it('mapStateToProps() returns a valid object', () => {
    const model = {
      id: 1,
      name: 'good car',
      price: 123,
      imageUrl: 'some url',
      makeId: 1
    };
    const make = { id: 1, name: 'good make' };
    const makes = [make];
    const models = [model];
    const goodMatch = { params: { id: 1 } };
    expect(
      mapStateToProps({ models, makes }, { match: goodMatch })
    ).toEqual({
      car: {
        ...model,
        make: make.name
      }
    });
    const badMatch = { params: { id: 2 } };
    expect(
      mapStateToProps({ models, makes }, {match: badMatch})
    ).toEqual({
      car: {
        make: undefined
      }
    });
  });
  it('mapDispatchToProps() returns a valid object', () => {
    const { dispatch } = configureMockStore();
    const mockDispatch = dispatch => bindActionCreators({}, dispatch);
    expect(JSON.stringify(mapDispatchToProps(dispatch))).toBe(
      JSON.stringify(mockDispatch(dispatch))
    );
  });
});
