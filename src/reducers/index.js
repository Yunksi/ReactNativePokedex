import { combineReducers } from 'redux';
import PokemonReducer from './PokemonReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
    pokemons: PokemonReducer,
    loading: LoadingReducer
});
