import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


class PokemonDetails extends Component {

    componentWillMount() {
        console.log(this.props.pokemon);
    }

    render() {
        return (
            <View style={{ padding: 10 }}>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { pokemonDetails } = state;

    return { pokemonDetails };
};

export default connect(mapStateToProps, null)(PokemonDetails);
