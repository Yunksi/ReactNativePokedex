import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';

class ListItem extends Component {

    onRowPress() {
        Actions.pokemonDetails({ pokemon: this.props.pokemon });
    }

    render() {
        const { name, uid } = this.props.pokemon;
        const {
            titleStyle,
            imageContainer,
            pokemonContainer,
            imageStyle }
            = styles;

        const uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${uid + 1}.png`;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <View style={imageContainer}>
                            <Image
                                style={imageStyle}
                                source={{ uri }}
                            />
                        </View>
                        <View style={pokemonContainer}>
                            <Text style={titleStyle}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15 }}>
                                <View style={{ flex: 1, borderColor: 'rgba(46,117,58,0.5)', borderRadius: 5, backgroundColor: 'rgba(73,168,99,0.5)', borderWidth: 1 }}>
                                    <Text style={{ padding: 3, textAlign: 'center' }}>Grass</Text>
                                </View>
                                <View style={{ flex: 1, borderColor: 'rgba(117,23,21,0.5)', borderRadius: 5, backgroundColor: 'rgba(250,49,45,0.5)', borderWidth: 1, marginLeft: 5 }}>
                                    <Text style={{ padding: 3, textAlign: 'center' }}>Poison</Text>
                                </View>
                            </View>
                        </View>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonContainer: {
        flex: 4
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
