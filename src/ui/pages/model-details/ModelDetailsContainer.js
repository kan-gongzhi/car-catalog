import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails';

class DetailContainer extends Component {
  render() {
    return <ModelDetails id={this.props.match.params.id} />;
  }
}

// connect to store
/*************************************************************/
export const mapStateToProps = () => {
  return {};
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
