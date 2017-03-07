import axios from 'axios';
import { POKEMONS_FETCH_SUCCESS } from './types';

export const fetchPokemons = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: POKEMONS_FETCH_SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => console.log(err));
    };
};
