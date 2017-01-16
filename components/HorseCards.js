import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Card, {CARD_HEIGHT, CARD_MARGIN_TOP} from './Card.js';

const HorseCards = ({cards, containerStyle}) => (
    <View style={containerStyle}>
        {cards.map((info, id) => {
            const style = {marginTop: ((CARD_HEIGHT + CARD_MARGIN_TOP) * info.position)};
            return <Card key={id}
                containerStyle={style}
                imageFile={info.image} />
        })}
    </View>
);

export default HorseCards;
