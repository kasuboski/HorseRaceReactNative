import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Card from './Card.js';

const SideCards = ({cards, containerStyle}) => (
    <View style={containerStyle}>
        {cards.map((cardInfo, id) => {
            const cardImage = cardInfo.flipped ? cardInfo.imageFile : require('../images/cards/back.png');
            return (
                <Card key={id}
                    imageFile={cardImage} />
            );
        })}
    </View>
);

export default SideCards;
