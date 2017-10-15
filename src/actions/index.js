export const requestDataAction = () => {
  return { type: 'REQUEST_DATA' };
};
   
export const receiveDataAction = (data) => {
  return { type: 'RECEIVE_DATA', data };
};

export const receiveDataErrorAction = (data_err) => {
  return { type: 'RECEIVE_DATA_ERROR', data_err };
};
 
