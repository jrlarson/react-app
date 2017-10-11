import {requestDataAction, receiveDataAction, receiveDataErrorAction} from '../index';

test('requestData returns an action object', () => {
  const action =  requestDataAction();
  expect(action).toEqual({ type: 'REQUEST_DATA' });
});

// ...state, data: action.data.body.results, searchInputDisabled: false, btnDisabled: false}
test('recieveData returns an action object', () => {
  const data = {data: { body: { results:'test'} } };
  const action =  receiveDataAction(data);
  expect(action).toEqual({ type: 'RECEIVE_DATA', data });
});

test('receiveDataError returns an action object', () => {
  const data_err = {type: 'test'};
  const action =  receiveDataErrorAction(data_err);
  expect(action).toEqual({ type: 'RECEIVE_DATA_ERROR', data_err });
});
