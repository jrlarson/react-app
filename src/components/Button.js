import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const Button = ({ onButtonClick, btnName, btnEnabled }) => <button onClick={onButtonClick} disabled={btnEnabled} name={btnName} >GO</button>;

const clickButtonAction = () => {
  return {
    type: 'CLICKED_BUTTON'
  };
}

function mapStateToProps(state) {
  return {
    btnEnabled: state.btnEnabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: () => dispatch(clickButtonAction())
  };
}

Button.propTypes = {
  onButtonClick: PropTypes.func,
  btnName: PropTypes.string,
  btnEnabled: PropTypes.bool
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Button);