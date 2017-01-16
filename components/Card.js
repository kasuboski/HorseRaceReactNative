import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

export const CARD_HEIGHT = 100;
export const CARD_WIDTH = 75;

const Card = ({imageFile, containerStyle}) => (
    <View style={containerStyle}>
        <Image
            source={imageFile}
            style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'contain',
        marginTop: 10,
    }
})

export default Card;
