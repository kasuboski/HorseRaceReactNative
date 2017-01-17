import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
} from 'react-native';

import Card from './Card.js';

const Deck = ({cards, onPress, containerStyle}) => {

    return (
        <TouchableHighlight style={containerStyle} onPress={onPress}>
            <View>
                <Card
                    imageFile={require('../images/cards/back.png')}
                />
            </View>
        </TouchableHighlight>
    );
};

export default Deck;
