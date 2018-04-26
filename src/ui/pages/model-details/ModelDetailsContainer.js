import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails';
import { getModelById } from '../../../selectors/models';
import { getMakeById } from '../../../selectors/makes';

export const ModelDetailsContainer = ({ car }) => <ModelDetails car={car} />;

// connect to store
/*************************************************************/
export const mapStateToProps = (
  { models, makes },
  { match: { params: { id } } }
) => {
  const model = getModelById(id)({ models }) || {};
  const make = getMakeById(model.makeId)({ makes }) || {};
  return {
    car: { ...model, make: make.name }
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelDetailsContainer
);
