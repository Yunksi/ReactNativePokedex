import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PokemonList from './components/pokemon/PokemonList';
import PokemonDetails from './components/pokemon/PokemonDetails';

const RouterComponent = () => {
    const { navigationBarStyle, titleStyle } = styles;

    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene
                key="pokemonList"
                component={PokemonList}
                title="Pokemons"
                navigationBarStyle={navigationBarStyle}
                titleStyle={titleStyle}
                initial
            />
            <Scene
                key="pokemonDetails"
                component={PokemonDetails}
                title="Pokemon Details"
                navigationBarStyle={navigationBarStyle}
                titleStyle={titleStyle}
                leftButtonIconStyle={{ tintColor: '#FFF' }}
            />
        </Router>
    );
};

const styles = {
    navigationBarStyle: {
        backgroundColor: '#EF5350'
    },
    titleStyle: {
        color: '#FFF'
    }
};

export default RouterComponent;

