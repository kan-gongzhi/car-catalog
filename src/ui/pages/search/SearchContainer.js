import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './Search';

class SearchContainer extends Component {
  render() {
    return <Search />;
  }
}

// connect to store
/*************************************************************/
export const mapStateToProps = () => {
  return {};
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
