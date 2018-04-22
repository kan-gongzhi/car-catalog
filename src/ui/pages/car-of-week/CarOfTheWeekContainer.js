import React, { Component } from 'react';
import CarOfTheWeek from './CarOfTheWeek';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getModelById } from '../../../selectors/models';
import { getMakeById } from '../../../selectors/makes';

class CarOfWeekContainer extends Component {
  render() {
    return <CarOfTheWeek car={this.props.car} />;
  }
}

// connect to store
/*************************************************************/
export const mapStateToProps = ({ carOfTheWeek, models, makes }) => {
  const { modelId, review } = carOfTheWeek;
  const model = getModelById(modelId)({ models }) || {};
  const make = getMakeById(model.makeId)({ makes });
  return {
    car: {
      review,
      ...model,
      ...make
    }
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarOfWeekContainer);
