import request from 'superagent';

export const fetchData = (searchParam) => {
    
  const req = request.get('/data')
    .query({search: searchParam})
    .type('application/json')
    .accept('application/json');
  return req;
};
        
        