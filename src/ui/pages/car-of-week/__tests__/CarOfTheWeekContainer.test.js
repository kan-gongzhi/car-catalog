import React from 'react';
import { shallow } from 'enzyme';
import {
  mapDispatchToProps,
  mapStateToProps,
  CarOfWeekContainer
} from '../CarOfTheWeekContainer';
import configureMockStore from 'redux-mock-store';
import { bindActionCreators } from 'redux';

describe('<CarOfWeekContainer />', () => {
  it('renders', () => {
    shallow(<CarOfWeekContainer car={{}} />);
  });
});

describe('redux connections', () => {
  it('mapStateToProps() returns a valid object', () => {
    const carOfTheWeek = { modelId: 1, review: 'good' };
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
    const car = {
      review: carOfTheWeek.review,
      name: model.name,
      price: model.price,
      makeName: make.name,
      imageUrl: model.imageUrl
    };
    expect(mapStateToProps({ carOfTheWeek, models, makes })).toEqual({ car });
    const failCarOTheWeek = { modelId: 2, review: 'good' };
    expect(
      mapStateToProps({ carOfTheWeek: failCarOTheWeek, models, makes })
    ).toEqual({
      car: {
        review: failCarOTheWeek.review,
        imageUrl: undefined,
        makeName: undefined,
        name: undefined,
        price: undefined
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
