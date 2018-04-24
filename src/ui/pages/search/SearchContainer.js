import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './Search';
import { Redirect } from 'react-router-dom';
// component helper
/*************************************************************/
const SEARCH = 'search';
const REDIRECT = 'redirect';
const updateSelectedMakeId = selectedMakeId => () => ({ selectedMakeId });
const updateSelectedModelId = selectedModelId => () => ({ selectedModelId });
const resetSelectedModelId = () => ({ selectedModelId: '' });
const redirectStage = () => ({ stage: REDIRECT });
const getModels = (selectedMakeId, models) =>
  models.filter(model => model.makeId + '' === selectedMakeId);

const renderer = (stage, props) => {
  switch (stage) {
    case SEARCH:
      return <Search {...props} />;
    case REDIRECT:
      return <Redirect to={`/make/model/${props.selectedModelId}`} />;
    default:
      return <Search {...props} />;
  }
};

const getRenderProps = (stage, props, state, methods = {}) => {
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
class SearchContainer extends Component {
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
const getProcessedModels = models =>
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
