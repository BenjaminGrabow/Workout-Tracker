import * as types from './actions';

const initialState = {
  error: null,
  loggingIn: false,
  exercise: null,
  byId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state };

    case types.LOGIN_START:
      return { ...state, loggingIn: true };

    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };

    case types.LOGIN_FAIL:
      return { ...state, loggingIn: false, error: action.payload }
    case types.START:

      return { ...state, exercise: action.payload };

    case types.SHOW_EXERCISE:
      // const yeah = action.payload;

      // const id = action.id;

      // const findExercise = state.exercise.filter(exer => exer.id === id);

      // const merge = Object.assign({}, findExercise[0], yeah); 

      // debugger
      // return { ...state, byId: merge  };

      const filterExercise = state.exercise.filter(exercise => exercise.id === action.id);
      debugger
      return { ...state, byId: filterExercise };

    default: return state;
  }
};

export default reducer;