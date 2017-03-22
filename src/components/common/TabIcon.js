import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({ selected, iconName }) => {
    return (
        <View style={styles.tabIconContainer}>
            <Icon
                name={iconName}
                size={18}
                color={selected ? '#444' : '#AAA'}
            />
            {/*<Text style={{ color: selected ? '#444' : '#AAA' }}>{title}</Text>*/}
        </View>
    );
};

const styles = {
    tabIconContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }

};

export { TabIcon };
