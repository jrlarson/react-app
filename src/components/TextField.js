import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const TextField = ({onTextChange, fieldName, searchInputEnabled}) => 
  <input type="text" onChange={onTextChange} name={fieldName} disabled={searchInputEnabled} />;

const changeTextAction = (textValue) => {
  return {
    type: 'CHANGE_TEXT',
    value: textValue
  };
}

function mapStateToProps(state) {
  return {
    searchInputEnabled: state.searchInputEnabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTextChange: (e) => dispatch(changeTextAction(e.target.value))
  };
}

TextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  searchInputEnabled: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
