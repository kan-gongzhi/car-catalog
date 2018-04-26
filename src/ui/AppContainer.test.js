import React from 'react';
import {
  AppContainer,
  buildUrl,
  mapDispatchToProps,
  mapStateToProps
} from './AppContainer';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { bindActionCreators } from 'redux';
import { fetchAndHandleAjax } from '../redux/ajax';
import { saveCarOfTheWeek } from '../redux/carOfTheWeek';
import { saveMakes } from '../redux/makes';
import { saveModels } from '../redux/models';

describe('<AppContainer />', () => {
  it('renders', () => {
    const props = {
      fetchAndHandleAjax: () => {},
      saveCarOfTheWeek: () => {},
      saveMakes: () => {},
      saveModels: () => {}
    };
    shallow(<AppContainer {...props} />);
  });
});

describe('helpers', () => {
  it('buildUrl() returns a valid url', () => {
    const url = '123';
    expect(buildUrl(url)).toEqual(`${process.env.PUBLIC_URL}/mock/${url}.json`);
  });
});

describe('redux connections', () => {
  it('mapStateToProps() returns a valid object', () => {
    expect(mapStateToProps()).toEqual({});
  });
  it('mapDispatchToProps() returns a valid object', () => {
    const { dispatch } = configureMockStore();
    const mockDispatch = dispatch =>
      bindActionCreators(
        {
          fetchAndHandleAjax: fetchAndHandleAjax,
          saveCarOfTheWeek: saveCarOfTheWeek,
          saveMakes: saveMakes,
          saveModels: saveModels
        },
        dispatch
      );
    expect(JSON.stringify(mapDispatchToProps(dispatch))).toBe(
      JSON.stringify(mockDispatch(dispatch))
    );
  });
});
