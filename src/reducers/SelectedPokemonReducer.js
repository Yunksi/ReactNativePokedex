import {
  POKEMON_DETAILS_FETCH_SUCCESS
} from '../actions';

const INITIAL_STATE = {
  name: '',
  stats: [],
  abilities: [],
  types: [],
  sprites: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_DETAILS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
