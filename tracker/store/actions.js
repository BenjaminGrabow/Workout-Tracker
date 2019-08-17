import axios from 'axios';

export const START = 'START';
export const GET_BY_ID = 'GET_BY_ID';
// export const LOGIN_FAIL = 'LOGIN_FAIL';


const adress = 'http://localhost:3500/';

export const start = () => dispatch => {
  return axios.get(adress)
    .then(res => {
      debugger
      dispatch({ type: START, payload: res.data });
    })
    .catch(err => {
      debugger
    })
};


export const getById = (id) => dispatch => {
  return axios.get(`${adress}user/${id}`)
    .then(res => {
      debugger
      dispatch({ type: GET_BY_ID, payload: res.data, id: id });
    })
    .catch(err => {
      debugger
    })
};