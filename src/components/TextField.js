import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const TextField = ({onTextChange, fieldName = '', searchInputDisabled = false}) => 
  <input type="text" onChange={onTextChange} name={fieldName} disabled={searchInputDisabled} />;
 
  
const changeTextAction = (textValue, name) => {
  return {
    type: 'CHANGE_TEXT',
    value: textValue,
    fieldName: name
  };
}

function mapStateToProps(state) {
  return {
    searchInputDisabled: state.searchInputDisabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTextChange: (e) => dispatch(changeTextAction(e.target.value, e.target.name))
  };
}

TextField.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  fieldName: PropTypes.string,
  searchInputDisabled: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
