import * as types from './actions';

const initialState = {
  exercise: null,
  byId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START:
     
      return { ...state, exercise: action.payload };

    case types.GET_BY_ID:
      const yeah = action.payload;

      const id = action.id;

      const findExercise = state.exercise.filter(exer => exer.id === id);

      const merge = Object.assign({}, findExercise[0], yeah); 

      debugger
      return { ...state, byId: merge  };

    default: return state;
  }
};

export default reducer;