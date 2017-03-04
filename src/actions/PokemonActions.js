import axios from 'axios';
import { POKEMONS_FETCH_SUCCESS } from './types';

export const fetchPokemons = () => {
    return (dispatch) => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                dispatch({ type: POKEMONS_FETCH_SUCCESS, payload: response.data });
            })
            .catch(err => console.log(err));
    };
};
