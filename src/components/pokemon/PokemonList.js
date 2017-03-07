import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Button, StatusBar, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions';
import ListItem from '../common/ListItem';



class PokemonList extends Component {

    componentWillMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle('light-content');
        this.props.fetchPokemons('https://pokeapi.co/api/v2/pokemon');

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    onLoadMoreButtonPress() {
        this.props.fetchPokemons(this.props.next);
    }

    createDataSource({ pokemons }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pokemons);
    }

    renderFooter() {
        return (<Button
            onPress={this.onLoadMoreButtonPress.bind(this)}
            title="Load More"
            color="#841584"
        />);
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
                style={{ paddingTop: 10 }}
            />
        );
    }
}

const mapStateToProps = state => {
    const { pokemons, loading } = state;

    const pokemonList = _.map(pokemons.results, (val, uid) => {
        return { ...val, uid };
    });

    console.log(state);

    return { pokemons: pokemonList, next: pokemons.next, loading };
};

export default connect(mapStateToProps, { fetchPokemons })(PokemonList);
