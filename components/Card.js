import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

const Card = ({imageFile, containerStyle}) => (
    <View style={containerStyle}>
        <Image
            source={imageFile}
            style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 100,
        resizeMode: 'contain',
        marginTop: 10,
    }
})

export default Card;
