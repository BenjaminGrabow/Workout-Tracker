export const FETCH = 'FETCH';

const adress = '';

export const fetch = () => dispatch => {
  return axios.get(adress).
  then(res => {
    return dispatch({ type: FETCH, payload: res.data})
  })
  .catch(err => {
    debugger;
  });
};