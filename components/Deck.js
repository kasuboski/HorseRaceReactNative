import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';

import Card from './Card.js';

import { shuffle } from '../Util.js';

export default class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deckOrig: props.cards,
            deck: props.cards,
            beenClickedOnce: false
        };

        this.containerStyle = props.containerStyle;
        this.onPress = props.onPress;

        this.onPressInternal = this.onPressInternal.bind(this);
    }

    onPressInternal() {
        let suit = this.state.deck[0].suit;
        // TODO handle deck running out
        let deck = this.state.deck.slice(1);
        if(deck.length == 0) {
            deck = this.state.deckOrig;
            shuffle(deck);
        }
        let newState = {deck: deck};
        if(!this.state.beenClickedOnce) {
            newState = {...newState, beenClickedOnce: true};
            this.setState({...this.state, ...newState});
        } else {
            newState = {...newState, beenClickedOnce: false};
            this.setState({...this.state, ...newState});
            this.onPress(suit);
        }
    }

    render() {
        const cardToShow = () => {
            return this.state.beenClickedOnce ? this.state.deck[0].image:require('../images/cards/back.png');
        };

        return (
            <TouchableOpacity style={this.containerStyle} onPress={this.onPressInternal}>
                <View>
                    <Card
                        imageFile={cardToShow()}
                    />
                </View>
            </TouchableOpacity>
        );
    }
};
