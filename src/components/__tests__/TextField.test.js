import { TextField } from '../TextField';
import React from 'react';
import { mount } from 'enzyme';
import { mapStateToProps } from '../TextField';
import { changeTextAction } from '../TextField';

// eslint-disable-next-line
test('Text Field component renders an input element', () => {
  const textProps = {
    fieldName:  'searchField', 
    searchInputDisabled:  false
  };

  const field = mount( <TextField {...textProps} />);
  expect(field.find('input').length).toEqual(1);

});

// eslint-disable-next-line
test('TextField mapStateToProps: should return defaults if values not available in state ', () => {
 
  const expectedDefaults = {
    searchInputDisabled: false
  };
  const initialState = {};
  
  expect(mapStateToProps(initialState)).toEqual(expectedDefaults);
});

test('TestField changeTextAction should respond with an action object', () => {

  const expectedResult = {
    type: 'CHANGE_TEXT',
    value: 'search Term',
    fieldName: 'searchInput'
  };

  const action = changeTextAction('search Term', 'searchInput');
  expect(action).toEqual(expectedResult);

});