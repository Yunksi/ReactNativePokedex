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
                        </View>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback >
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
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    titleStyle: {
        fontSize: 22
    }
};

export default ListItem;
