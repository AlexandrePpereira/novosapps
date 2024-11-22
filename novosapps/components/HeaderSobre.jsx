import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderSobre = ({ titulo }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFF00',
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold'
    }
});

export default HeaderSobre;
