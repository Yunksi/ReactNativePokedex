import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PokemonList from './components/pokemon/PokemonList';

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

