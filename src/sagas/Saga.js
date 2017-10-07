import { put } from 'redux-saga/effects';

export function* onSearch() {
  yield put({ type: 'SEARCH' });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    onSearch(),
  ];
}
