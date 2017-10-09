import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Button = ({ onButtonClick, btnName, btnDisabled }) => <button onClick={onButtonClick} disabled={btnDisabled} name={btnName} >GO</button>;

const clickButtonAction = () => {
  return {
    type: 'CLICKED_BUTTON'
  };
}

function mapStateToProps(state) {
  return {
    btnDisabled: state.btnDisabled
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
  btnDisabled: PropTypes.bool
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Button);