import {
    POKEMONS_FETCH_SUCCESS
} from '../actions';

const INITIAL_STATE = true;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POKEMONS_FETCH_SUCCESS:
            return false;
        default:
            return state;
    }
};
