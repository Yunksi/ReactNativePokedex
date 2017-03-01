import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions';



class PokemonList extends Component {
    componentWillMount() {
        this.props.fetchPokemons();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ pokemons }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        console.log(pokemons);

        this.dataSource = ds.cloneWithRows(pokemons);
    }

    renderRow(pokemon) {
        return <Text>{pokemon.name}</Text>;
    }


    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const pokemons = _.map(state.pokemons, (val, uid) => {
        return { ...val, uid };
    });

    return { pokemons };
};

export default connect(mapStateToProps, { fetchPokemons })(PokemonList);
