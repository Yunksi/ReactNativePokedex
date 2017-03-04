import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';

class ListItem extends Component {

    onRowPress() {
        Actions.pokemonDetails({ pokemon: this.props.pokemon });
    }

    render() {
        const { name } = this.props.pokemon;
        const { titleStyle } = styles;

        return (
            <TouchableHighlight onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
