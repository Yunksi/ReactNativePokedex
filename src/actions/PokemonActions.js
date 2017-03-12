import axios from 'axios';
import { POKEMONS_FETCH_SUCCESS, POKEMON_DETAILS_FETCH_SUCCESS, SET_LOADING } from './types';

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

export const fetchPokemonDetails = (url) => {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: POKEMON_DETAILS_FETCH_SUCCESS,
                payload: response.data
            });
        }).catch(err => console.log(err));
    };
};

export const setLoadingPokemons = (loading) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: loading
        });
    };
};
