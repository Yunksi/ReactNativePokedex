import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import PokemonList from './components/pokemon/PokemonList';
import PokemonDetails from './components/pokemon/PokemonDetails';
import FavoritesList from './components/pokemon/FavoritesList';
import SearchPokemon from './components/pokemon/SearchPokemon';
import { TabIcon } from './components/common';


const RouterComponent = () => {
    const { tabBarStyle, navigationBarStyle, titleStyle, sceneStyle, pokemonDetailsNavBarStyle } = styles;

    return (
        <Router>
            <Scene key="root">
                <Scene key="tabbar" tabs tabBarStyle={tabBarStyle}>
                    <Scene key="pokemons" title="Pokemons" icon={TabIcon} iconName={'list'} >
                        <Scene
                            key="pokemonList"
                            component={PokemonList}
                            title="Pokemons"
                            navigationBarStyle={navigationBarStyle}
                            titleStyle={titleStyle}
                            sceneStyle={sceneStyle}
                        />
                        <Scene
                            key="pokemonDetails"
                            component={PokemonDetails}
                            navigationBarStyle={pokemonDetailsNavBarStyle}
                            titleStyle={titleStyle}
                            leftButtonIconStyle={{ tintColor: '#FFF' }}
                            hideNavBar
                        />
                    </Scene>
                    <Scene key="favorites" title="Favorites" icon={TabIcon} iconName={'star'}>
                        <Scene
                            key="favoritesList"
                            component={FavoritesList}
                            title="Favorites"
                            navigationBarStyle={navigationBarStyle}
                            titleStyle={titleStyle}
                            sceneStyle={sceneStyle}
                        />
                    </Scene>
                    <Scene key="search" title="Search" icon={TabIcon} iconName={'search'}>
                        <Scene
                            key="searchPokemon"
                            component={SearchPokemon}
                            title="Search"
                            navigationBarStyle={navigationBarStyle}
                            titleStyle={titleStyle}
                            sceneStyle={sceneStyle}
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router >
    );
};

const styles = {
    sceneStyle: {
        paddingTop: (Platform.OS === 'ios') ? 70 : 60,
        paddingBottom: 60
    },
    tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderColor: '#b7b7b7'
    },
    navigationBarStyle: {
        backgroundColor: '#EF5350'
    },
    pokemonDetailsNavBarStyle: {
        backgroundColor: '#EF5350',
        borderBottomWidth: 0
    },
    titleStyle: {
        color: '#FFF'
    }
};

export default RouterComponent;

