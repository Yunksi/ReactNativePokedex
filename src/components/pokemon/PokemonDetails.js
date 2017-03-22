import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemonDetails } from '../../actions';

class PokemonDetails extends Component {

    componentWillMount() {
        this.props.fetchPokemonDetails(this.props.pokemon.url);
    }

    render() {
        const { sectionHeader } = styles;

        const { name } = this.props.selectedPokemon;

        console.log(this.props.selectedPokemon);

        const baseStats = this.props.selectedPokemon.stats.map((stat, i) => {
            return (
                <View key={i}>
                    <Text>{stat.stat.name.toUpperCase()}</Text>
                    <Text>{stat.base_stat}</Text>
                </View>
            );
        });

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#EF5350', height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ color: '#FFF' }}>{name.toUpperCase()}</Text>
                </View>
                {/*Pokemon info view*/}
                <View>
                    <Text style={sectionHeader}>Info</Text>
                </View>
                {/*Pokemon Abilities view*/}
                <View>
                    <Text style={sectionHeader}>Abilities</Text>
                </View>
                {/*Pokemon base stats view*/}
                <View>
                    <Text style={sectionHeader}>Base Stats</Text>
                    {baseStats}
                </View>

            </View>
        );
    }
}

const styles = {
    sectionHeader: {
        fontSize: 18,
        fontWeight: '400',
        color: 'red',
        paddingLeft: 7
    }
};

const mapStateToProps = (state) => {
    const { selectedPokemon } = state;

    return { selectedPokemon };
};

export default connect(mapStateToProps, { fetchPokemonDetails })(PokemonDetails);
