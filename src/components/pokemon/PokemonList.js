import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions';
import ListItem from '../common/ListItem';



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
        return <Button onPress={this.onLoadMoreButtonPress.bind(this)} title="Load More" color="#841584" />;
    }
    renderRow(pokemon) {
        return <ListItem pokemon={pokemon} />;
    }

    render() {
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
    const pokemons = _.map(state.pokemons.results, (val, uid) => {
        return { ...val, uid };
    });

    return { pokemons, next: state.pokemons.next };
};

export default connect(mapStateToProps, { fetchPokemons })(PokemonList);
