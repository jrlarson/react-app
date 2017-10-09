export function requestData() {
  return { type: 'REQUEST_DATA' }
}
   
export function receiveData(data) {
  return { type: 'RECEIVE_DATA', data };
}

export function receiveDataError(data_err) {
  return { type: 'RECEIVE_DATA_ERROR', data_err };
}
 
