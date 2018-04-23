import React, { Component } from 'react';
import { fetchAndHandleAjax } from '../redux/ajax';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendGetRequest } from '../helpers/apis';
import App from './App';
import { saveCarOfTheWeek } from '../redux/carOfTheWeek';
import { saveMakes } from '../redux/makes';
import { saveModels } from '../redux/models';
import { withRouter } from 'react-router-dom';

export const buildUrl = url => `${process.env.PUBLIC_URL}/mock/${url}.json`;
export const CARS_OF_THE_WEEK_URL = buildUrl('carOfTheWeek');
export const MAKES_URL = buildUrl('makes');
export const MODELS_URL = buildUrl('models');

class SearchContainer extends Component {
  componentDidMount() {
    const {
      fetchAndHandleAjax,
      saveCarOfTheWeek,
      saveMakes,
      saveModels
    } = this.props;

    const fetchMakes = () => sendGetRequest(fetchAndHandleAjax, MAKES_URL);

    const fetchModels = () => sendGetRequest(fetchAndHandleAjax, MODELS_URL);

    const fetchCarOfTheWeek = () =>
      sendGetRequest(fetchAndHandleAjax, CARS_OF_THE_WEEK_URL);

    Promise.all([
      fetchMakes(),
      fetchModels(),
      fetchCarOfTheWeek()
    ]).then(values => {
      saveMakes(values[0]);
      saveModels(values[1]);
      saveCarOfTheWeek(values[2]);
    });
  }
  render() {
    return <App />;
  }
}

// connect to store
/*************************************************************/
export const mapStateToProps = () => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAndHandleAjax: fetchAndHandleAjax,
      saveCarOfTheWeek: saveCarOfTheWeek,
      saveMakes: saveMakes,
      saveModels: saveModels
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
);
