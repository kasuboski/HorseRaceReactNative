import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Button from './Button';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Horse Race
            </Text>
            <Button
                title='Play'
                color='#E1BB80'
                fontSize={24}
                onPress={()=>Actions.race()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8E443D',
        padding: 20,
    },
    title: {
        fontSize: 48,
        marginBottom: 100,
        color: 'white',
        textAlign: 'center',
    },
});

export default HomeScreen;
