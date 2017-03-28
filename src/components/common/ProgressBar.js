import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({ ratio, fillColor, style }) => {
    return (
        <View style={[styles.bar, styles.round, style]}>
            <View style={[{ flex: ratio, backgroundColor: fillColor }, styles.round]} />
            <View style={{ flex: 1 - ratio }} />
        </View>
    );
};

const styles = {
    bar: {
        flex: 1,
        flexDirection: 'row',
        height: 4,
        backgroundColor: 'rgba(0, 0, 0, .06)',
    },

    round: {
        borderRadius: 2,
    },
};

export { ProgressBar };
