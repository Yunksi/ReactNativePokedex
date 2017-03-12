import {
    POKEMONS_FETCH_SUCCESS,
    SET_LOADING
} from '../actions';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POKEMONS_FETCH_SUCCESS:
            return false;
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
};
