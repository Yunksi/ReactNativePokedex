import { combineReducers } from 'redux';
import PokemonReducer from './PokemonReducer';
import LoadingReducer from './LoadingReducer';
import LoadingAdditionalDataReducer from './LoadingAdditionalDataReducer';
import SelectedPokemonReducer from './SelectedPokemonReducer';

export default combineReducers({
    pokemons: PokemonReducer,
    loading: LoadingReducer,
    loadingAdditionalData: LoadingAdditionalDataReducer,
    selectedPokemon: SelectedPokemonReducer
});
