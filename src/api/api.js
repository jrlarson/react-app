import request from 'superagent';

var data_err = {
  error: true,
  err_msg: 'GET request failed!'
}
  
export const fetchData = (searchParam) => {
    
  const req = request.get('/data')
    .query({search: searchParam})
    .type('application/json')
    .accept('application/json');
  return req;
}
        
        