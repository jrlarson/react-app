import { Button } from '../Button';
import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from '../Button';

// eslint-disable-next-line
test('Button component renders a Button', () => {
  const buttonProps = {
    btnName:  'button', 
    btnDisabled:  false
  }

  const field = shallow( <Button {...buttonProps} />);
  expect(field.find('button').length).toEqual(1);

});

// eslint-disable-next-line
test('mapStateToProps: should return defaults  if values not available in state ', () => {
 
  const expectedDefaults = {
    btnDisabled: false
  };
  const initialState = {};
  
  expect(mapStateToProps(initialState)).toEqual(expectedDefaults);
});