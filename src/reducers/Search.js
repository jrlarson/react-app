export const  search = (state = {}, action) => {
  switch (action.type) {
  case 'REQUEST_DATA':
  // This is one way to provide a new state object with manipulated values.
    return Object.assign({}, state, {
      searchInputDisabled: true,
      btnDisabled: true
    });
  case 'CHANGE_TEXT':
  // Another way to provide a new state object with manipulated values (Object Spread operator).
    return { ...state, searchParam: action.value, fieldName: action.fieldName };
  case 'RECEIVE_DATA':
    return { ...state, data: action.data.body.results, searchInputDisabled: false, btnDisabled: false};
  case 'RECEIVE_DATA_ERROR':
    return { ...state, data_error: true, message: action.err_msg, searchInputDisabled: false,btnDisabled: false};
  default:
    return state;
  }

}
