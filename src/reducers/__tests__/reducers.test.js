import search from '../Search';

test('search request data returns a new state with modifications', () => {

  const initialState = {
    searchParam: 'test',
  };
  const action = {
    type: 'REQUEST_DATA',
    value: 'fin'
  };
  const endState = search(initialState, action);
  
  expect(endState.searchInputDisabled).toBe(true);
  expect(endState.btnDisabled).toBe(true);
  expect(endState.searchParam).toEqual('test'); // Make sure searchParam wasn't changed

});



