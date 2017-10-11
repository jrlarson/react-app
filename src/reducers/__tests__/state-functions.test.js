import { search } from '../Search';

test('search returns a new state with modifications', () => {

  const initialState = {
    searchParam: 'test',
  }
  
  const action = {
    type: 'REQUEST_DATA',
    value: 'fin'
  }
  
  const endState = search(initialState, action);
  
  expect(endState.searchInputDisabled).toBe(true);

});



