import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import { CARD_HEIGHT } from './Card.js';
import Deck from './Deck.js';
import SideCards from './SideCards.js';
import HorseCards from './HorseCards.js';

import { createDeck, getSideCards } from '../Util.js';

const aces = [
    {
        suit: 'clubs',
        position: 0,
        image: {uri: 'card_ace_of_clubs'}
    },
    {
        suit: 'spades',
        position: 0,
        image: {uri: 'card_ace_of_spades'}
    },
    {
        suit: 'hearts',
        position: 0,
        image: {uri: 'card_ace_of_hearts'}
    },
    {
        suit: 'diamonds',
        position: 0,
        image: {uri: 'card_ace_of_diamonds'}
    },
];

export default class App extends Component {
    constructor(props) {
        super(props);

        let deck = createDeck();
        let sideCards = getSideCards(deck, 5).map((val) => ({...val, flipped: false}));

        this.state = {
            deck: deck,
            sideCards: sideCards,
            aces: aces,
            lastFlippedPosition: -1
        };

        this.flipCard = this.flipCard.bind(this);
        this.moveAce = this.moveAce.bind(this);
    }

    flipCard() {
        let state = this.state;
        let sideCards = state.sideCards;
        let toFlipPosition = state.lastFlippedPosition + 1;
        let cardToFlip = sideCards[toFlipPosition];

        let flippedCard = {...cardToFlip, flipped: true};

        sideCards[toFlipPosition] = flippedCard;

        let newState = {
            sideCards: sideCards,
            lastFlippedPosition: toFlipPosition
         };

        this.setState({...state, ...newState});

        setTimeout(this.moveAce, 1000);
    }

    moveAce() {
        let lastFlippedCard = this.state.sideCards[this.state.lastFlippedPosition];
        let cardSuit = lastFlippedCard.suit;

        // find ace to move
        let aces = this.state.aces;
        let aceToMovePos = aces.findIndex((card) => card.suit == cardSuit);
        let aceToMove = aces[aceToMovePos];
        aceToMove = {...aceToMove, position: aceToMove.position + 1};

        aces[aceToMovePos] = aceToMove;

        this.setState(...this.state, aces: aces);

    }

    render() {
        return (
            <View style={styles.container}>
                {/* need wrapper view for ScrollView to scroll */}
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <SideCards
                            containerStyle={styles.markers}
                            cards={this.state.sideCards} />

                        <HorseCards
                            containerStyle={styles.aces}
                            cards={this.state.aces} />
                    </View>
                </ScrollView>
                <Deck
                    cards={this.state.deck}
                    containerStyle={styles.deckContainer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E443D',
  },
  cardContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
  },
  deckContainer: {
      position: 'absolute',
      bottom: 15,
      right: 10,
  },
  aces: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  markers: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: CARD_HEIGHT,
  }
});
