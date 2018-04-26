import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './Search';
import { Redirect } from 'react-router-dom';
// component helper
/*************************************************************/
export const SEARCH = 'search';
export const REDIRECT = 'redirect';
export const updateSelectedMakeId = selectedMakeId => () => ({
  selectedMakeId
});
export const updateSelectedModelId = selectedModelId => () => ({
  selectedModelId
});
export const resetSelectedModelId = () => ({ selectedModelId: '' });
export const redirectStage = () => ({ stage: REDIRECT });
export const getModels = (selectedMakeId, models) =>
  models.filter(model => model.makeId + '' === selectedMakeId);

export const renderer = (stage, props) => {
  switch (stage) {
    case SEARCH:
      return <Search {...props} />;
    case REDIRECT:
      return <Redirect to={`/make/model/${props.selectedModelId}`} />;
    default:
      return <Search {...props} />;
  }
};

export const getRenderProps = (stage, props, state, methods = {}) => {
  const { selectedModelId } = state;
  switch (stage) {
    case SEARCH:
      const { makes, models } = props;
      const { selectedMakeId } = state;
      const { handleMakesChange, handleModelsChange, search } = methods;
      const filteredModels = getModels(selectedMakeId, models);
      return {
        makes,
        models: filteredModels,
        handleMakesChange,
        handleModelsChange,
        handleClick: search,
        hasSelectedMakeId: selectedMakeId !== '',
        hasSelectedModelId: selectedModelId !== ''
      };
    case REDIRECT:
      return { selectedModelId };
    default:
      return {};
  }
};

// component
/*************************************************************/
export class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedMakeId: '',
      selectedModelId: '',
      stage: SEARCH
    };
  }

  handleMakesChange = ({ target: { value } }) => {
    this.setState(updateSelectedMakeId(value));
    this.setState(resetSelectedModelId);
  };

  handleModelsChange = ({ target: { value } }) => {
    this.setState(updateSelectedModelId(value));
  };

  search = () => {
    this.setState(redirectStage);
  };
  render() {
    const { handleMakesChange, handleModelsChange, search } = this;
    const { stage } = this.state;
    return renderer(
      stage,
      getRenderProps(stage, this.props, this.state, {
        handleMakesChange,
        handleModelsChange,
        search
      })
    );
  }
}

// redux helper
/*************************************************************/
export const getProcessedModels = models =>
  models.map(({ id, makeId, name }) => ({
    id,
    makeId,
    name
  }));

// connect to store
/*************************************************************/
export const mapStateToProps = ({ makes, models }) => {
  return {
    makes,
    models: getProcessedModels(models)
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
