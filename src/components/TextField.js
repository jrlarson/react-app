import _ from 'lodash';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const TextField = ({onTextChange, fieldName = '', searchInputDisabled = false}) => 
  <input type="text" onChange={onTextChange} name={fieldName} disabled={searchInputDisabled} />
 
export const changeTextAction = (textValue, name) => {
  return {
    type: 'CHANGE_TEXT',
    value: textValue,
    fieldName: name
  };
}

export const mapStateToProps = (state) => {
  return {
    searchInputDisabled: _.get(state.searchInputDisabled, 'searchInputDisabled', false)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (e) => dispatch(changeTextAction(e.target.value, e.target.name))
  };
}

TextField.propTypes = {
  onTextChange: PropTypes.func,
  fieldName: PropTypes.string,
  searchInputDisabled: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
