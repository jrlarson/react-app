export default function search(state = {}, action) {
  switch (action.type) {
  case 'CLICKED_BUTTON':
    return Object.assign({}, state, {
      list: state.searchParam
    });
  case 'CHANGE_TEXT':
    return Object.assign({}, state, {
      searchParam: action.textValue
    });
  default:
    return state;
  }
}