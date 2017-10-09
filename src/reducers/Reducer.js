const initialState = {
  searchParam: 'empty',
  list: 'empty'
}

export default function search(state = initialState, action) {
  switch (action.type) {
  case 'REQUEST_DATA':
    return Object.assign({}, state, {
      searchInputDisabled: true,
      btnDisabled: true
    });
  case 'CHANGE_TEXT':
    return { ...state, searchParam: action.value, fieldName: action.fieldName };
  case 'RECEIVE_DATA':
    return { ...state, data: action.data.body.results, searchInputDisabled: false, btnDisabled: false};
  case 'RECEIVE_DATA_ERROR':
    return { ...state, data_error: true, message: action.err_msg, searchInputDisabled: false,btnDisabled: false};
  default:
    return state;
  }

}