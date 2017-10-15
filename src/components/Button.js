import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Button = ({ onButtonClick, btnName = '', btnDisabled = false }) => 
  <button onClick={onButtonClick} disabled={btnDisabled} name={btnName} id={btnName} className='button'>GO</button>;

const clickButtonAction = () => {
  return {
    type: 'CLICKED_BUTTON'
  };
};

export const mapStateToProps = (state) => {
  return {
    btnDisabled: _.get(state.btnDisabled, 'btnDisabled', false)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(clickButtonAction())
  };
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
  btnName: PropTypes.string,
  btnDisabled: PropTypes.bool
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Button);