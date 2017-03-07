import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class PokemonDetails extends Component {
    render() {
        return (
            <View>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998" onButtonPress={console.log('Test')}
                >
                    Login with Facebook
                </Icon.Button>
            </View>
        );
    }
}

export default PokemonDetails;
