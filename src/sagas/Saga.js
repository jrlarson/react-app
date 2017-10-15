import { put, call, takeLatest, select } from 'redux-saga/effects';
import {requestDataAction, receiveDataAction} from '../actions/index';
import * as selectors from '../selectors/selectors';
import {fetchData} from '../api/api';

export function* onSearch() {
  yield put(requestDataAction());
  const searchTerm = yield select(selectors.searchParam);
  const result = yield call(fetchData, searchTerm);
  yield put(receiveDataAction(result));
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeLatest('CLICKED_BUTTON', onSearch);
}
