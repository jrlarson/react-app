import {call, put, select} from 'redux-saga/effects';
import {requestDataAction, receiveDataAction} from '../../actions/index';
import * as selectors from '../../selectors/selectors';
import {fetchData} from '../../api/api';

import {onSearch} from '../Saga';

describe('>>>search ',()=>{
  const action = {type: 'TEST_SAGA', output:'TEST_SAGA -Testing'};
  const generator = onSearch(action);
  it('+++ put(requestDataAction())', () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(put(requestDataAction()));
  });
  it('+++ must call select()', () => {
    const testValue = generator.next().value;
    expect(testValue).toEqual(select(selectors.searchParam));
  });
  it('+++ must call function to get data', () => {
    const term = 'test';
    const testValue = generator.next(term).value;
    expect(testValue).toEqual(call(fetchData, term));
  }); 
  it('+++ put(receiveDataAction(result)', () => { 
    const dummyResult = 'Dummy Output';
    const testValue = generator.next(dummyResult).value;
    expect(testValue).toEqual(put(receiveDataAction(dummyResult)));
  }); 
    
});
