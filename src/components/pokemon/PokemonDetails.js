import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchPokemonDetails } from '../../actions';

import { CardSection } from '../common/CardSection';
import { ProgressBar } from '../common/ProgressBar';

class PokemonDetails extends Component {

    componentWillMount() {
        this.props.fetchPokemonDetails(this.props.pokemon.url);
    }

    render() {
        const { sectionHeader } = styles;

        const { name } = this.props.selectedPokemon;

        console.log(this.props.selectedPokemon);

        const abilities = this.props.selectedPokemon.abilities.map((ability, i) => {
            return (
                <View key={i} style={{ flexDirection: 'row' }}>
                    <Text>{ability.is_hidden}</Text>
                    <Text>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</Text>
                </View>
            );
        });

        const baseStats = this.props.selectedPokemon.stats.map((stat, i) => {
            return (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ flex: 2, fontSize: 18 }}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</Text>
                    <ProgressBar ratio={stat.base_stat / 300 || 0} fillColor={'#ff8a65'} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 18 }}>{stat.base_stat}</Text>
                    </View>
                </View>
            );
        });

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#EF5350', height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 10, zIndex: 99 }}>
                    <Image style={{ height: 96, width: 96, borderRadius: 48, borderWidth: 1, backgroundColor: 'white', borderColor: '#eee' }} source={{ uri: this.props.selectedPokemon.sprites.front_default }} />
                    <Text style={{ color: '#FFF', fontSize: 36, fontWeight: '600' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                </View>

                {/*Pokemon info view*/}
                <View>
                    <Text style={sectionHeader}>Info</Text>
                </View>
                {/*Pokemon Abilities view*/}
                <View>
                    <Text style={sectionHeader}>Abilities</Text>
                    <CardSection>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            {abilities}
                        </View>
                    </CardSection>
                </View>
                {/*Pokemon base stats view*/}
                <View>
                    <Text style={sectionHeader}>Base Stats</Text>
                    <CardSection>
                        {/*{baseStats}*/}
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            {baseStats}
                        </View>
                    </CardSection>
                </View>

            </ScrollView>
        );
    }
}

const styles = {
    sectionHeader: {
        fontSize: 18,
        fontWeight: '400',
        color: 'red',
        paddingLeft: 7,
        paddingTop: 5,
        paddingBottom: 5
    }
};

const mapStateToProps = (state) => {
    const { selectedPokemon } = state;

    return { selectedPokemon };
};

export default connect(mapStateToProps, { fetchPokemonDetails })(PokemonDetails);
