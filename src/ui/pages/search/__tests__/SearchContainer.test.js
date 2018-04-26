import React from 'react';
import { shallow } from 'enzyme';
import {
  SEARCH,
  REDIRECT,
  SearchContainer,
  mapStateToProps,
  mapDispatchToProps,
  getModels,
  updateSelectedMakeId,
  getProcessedModels,
  getRenderProps,
  redirectStage,
  renderer,
  resetSelectedModelId,
  updateSelectedModelId
} from '../SearchContainer';
import configureMockStore from 'redux-mock-store';
import { bindActionCreators } from 'redux';
import Search from '../Search';

describe('Helpers', () => {
  it('updateSelectedMakeId() returns a function that returns a valid object', () => {
    expect(updateSelectedMakeId(1)()).toEqual({ selectedMakeId: 1 });
  });

  it('updateSelectedModelId() returns a function that returns a valid object', () => {
    expect(updateSelectedModelId(1)()).toEqual({ selectedModelId: 1 });
  });

  it('resetSelectedModelId() returns a valid object', () => {
    expect(resetSelectedModelId()).toEqual({ selectedModelId: '' });
  });

  it('redirectStage() returns a valid object', () => {
    expect(redirectStage()).toEqual({ stage: REDIRECT });
  });

  it('getModels() returns the selected model by make id', () => {
    const selectedMakeId = '1';
    const model = { makeId: 1 };
    const models = [model];
    expect(getModels(selectedMakeId, models)).toEqual([model]);
  });

  it('renderer() returns a valid component', () => {
    expect(renderer(SEARCH).type.name).toBe('Search');
    expect(renderer(REDIRECT, { selectedModelId: 123 }).type.name).toBe(
      'Redirect'
    );
    expect(renderer('').type.name).toBe('Search');
  });

  it('getRenderProps() returns a valid component', () => {
    const handleMakesChange = () => {};
    const handleModelsChange = () => {};
    const search = () => {};
    const selectedMakeId = 1;
    const selectedModelId = 1;
    const models = [];
    const makes = [];
    const methods = { handleMakesChange, handleModelsChange, search };
    const state = { selectedMakeId, selectedModelId };
    const props = { makes, models };
    const filteredModels = getModels(selectedMakeId, models);

    expect(getRenderProps(SEARCH, props, state, methods)).toEqual({
      makes,
      models: filteredModels,
      handleMakesChange,
      handleModelsChange,
      handleClick: search,
      hasSelectedMakeId: selectedMakeId !== '',
      hasSelectedModelId: selectedModelId !== ''
    });

    expect(getRenderProps(REDIRECT, props, state, methods)).toEqual({
      selectedModelId
    });

    expect(getRenderProps('', props, state, methods)).toEqual({});
    expect(getRenderProps('', props, state)).toEqual({});
  });
});

describe('<SearchContainer />', () => {
  it('renders', () => {
    const models = [];
    const makes = [];
    const props = { makes, models };

    shallow(<SearchContainer {...props} />);
  });

  it('handleMakesChange() works', () => {
    const models = [];
    const makes = [];
    const props = { makes, models };

    const wrapper = shallow(<SearchContainer {...props} />);
    expect(wrapper.state().selectedMakeId).toBe('');
    wrapper.instance().handleMakesChange({ target: { value: '1' } });
    expect(wrapper.state().selectedMakeId).toBe('1');
    expect(wrapper.state().selectedModelId).toBe('');
  });

  it('handleModelsChange() works', () => {
    const models = [];
    const makes = [];
    const props = { makes, models };

    const wrapper = shallow(<SearchContainer {...props} />);
    expect(wrapper.state().selectedModelId).toBe('');
    wrapper.instance().handleModelsChange({ target: { value: '1' } });
    expect(wrapper.state().selectedModelId).toBe('1');
  });

  it('search() works', () => {
    const models = [];
    const makes = [];
    const props = { makes, models };

    const wrapper = shallow(<SearchContainer {...props} />);
    expect(wrapper.state().stage).toBe(SEARCH);
    wrapper.instance().search();
    expect(wrapper.state().stage).toBe(REDIRECT);
  });
});

describe('redux connections', () => {
  it('getProcessedModels() returns a valid array', () => {
    const models = [{ id: 1, makeId: 1, name: 'a', other: 'other' }];
    expect(getProcessedModels(models)).toEqual([
      { id: 1, makeId: 1, name: 'a' }
    ]);
  });

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
    expect(mapStateToProps({ models, makes })).toEqual({
      makes,
      models: getProcessedModels(models)
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
