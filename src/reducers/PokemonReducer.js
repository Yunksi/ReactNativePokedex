import {
  POKEMONS_FETCH_SUCCESS
} from '../actions';

const INITIAL_STATE = {
  results: [],
  next: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMONS_FETCH_SUCCESS:
      return {
        ...state,
        results: [...state.results.concat(action.payload.results)],
        next: action.payload.next
      };
    default:
      return state;
  }
};
