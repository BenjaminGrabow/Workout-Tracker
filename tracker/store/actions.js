import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const FETCH_EXERCISES = 'FETCH_EXERCISES';
export const GET_EXERCISE = 'GET_EXERCISE';
export const SHOW_CATGEGORY = 'SHOW_CATEGORY';
export const CLOSE_EXERCISE = 'CLOSE_EXERCISE';
export const PAGINATE = 'PAGINATE';
export const SEARCH_EXERCISE = 'SEARCH_EXERCISE';

const exercises = 'http://localhost:5000/exercises';

export const signUp = creds => dispatch => {
  return axios.post(`${adress}auth/register`, creds)
    .then(res => {

      dispatch({ type: REGISTER });
    })
    .catch(err => {
      debugger
    })
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post(`${adress}auth/login`, creds)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};

export const fetchExercises = () => dispatch => {
  
 // instead of localhost use the IP adress !!!
    axios.get('http://192.168.178.43:5000/exercises')
      .then(res => {
       debugger
        dispatch({ type: FETCH_EXERCISES, payload: res.data });
      })
      .catch(err => {
        debugger
      });
};

export const getExercise = (id) => {
  debugger
  return { type: GET_EXERCISE, id: id }; 
};

export const showCategory = (category) => {
  return { type: SHOW_CATGEGORY, category: category };   
};

export const closeExercise = () => {
  return { type: CLOSE_EXERCISE };   
};

export const paginate = (num) => {
  return { type: PAGINATE, num: num };   
};

export const searchExercise = (exercise) => {
  return { type: SEARCH_EXERCISE, exercise: exercise };   
}