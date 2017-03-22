import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, StatusBar, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemons, setLoadingPokemons } from '../../actions';
import ListItem from '../common/ListItem';
import { Button } from '../common';



class PokemonList extends Component {

    componentWillMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle('light-content');
        this.props.fetchPokemons('https://pokeapi.co/api/v2/pokemon/?limit=1');

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    onLoadMoreButtonPress() {
        this.props.setLoadingPokemons(true);
        this.props.fetchPokemons(this.props.next);
    }

    createDataSource({ pokemons }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pokemons);
    }

    renderFooter() {
        if (this.props.loadingAdditionalData) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button onPress={this.onLoadMoreButtonPress.bind(this)}>
                Load more
            </Button>);
    }
    renderRow(pokemon) {
        return <ListItem pokemon={pokemon} />;
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>);
        }
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                renderFooter={this.renderFooter.bind(this)}
            />
        );
    }
}

const mapStateToProps = state => {
    const { pokemons, loading, loadingAdditionalData } = state;

    const pokemonList = _.map(pokemons.results, (val, uid) => {
        return { ...val, uid };
    });

    return { pokemons: pokemonList, next: pokemons.next, loading, loadingAdditionalData };
};

export default connect(mapStateToProps, { fetchPokemons, setLoadingPokemons })(PokemonList);
