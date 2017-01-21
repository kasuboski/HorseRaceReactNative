import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Alert
} from 'react-native';

import { CARD_HEIGHT, CARD_MARGIN_TOP } from './Card.js';
import Deck from './Deck.js';
import SideCards from './SideCards.js';
import HorseCards from './HorseCards.js';

import { createDeck, getSideCards, capitalizeWord } from '../Util.js';

const acesInitial = [
    {
        suit: 'clubs',
        position: -1,
        image: {uri: 'card_ace_of_clubs'}
    },
    {
        suit: 'spades',
        position: -1,
        image: {uri: 'card_ace_of_spades'}
    },
    {
        suit: 'hearts',
        position: -1,
        image: {uri: 'card_ace_of_hearts'}
    },
    {
        suit: 'diamonds',
        position: -1,
        image: {uri: 'card_ace_of_diamonds'}
    },
];

const FORWARD = 'forward';
const BACKWARD = 'backward';

function resetGame() {
    let deck = createDeck();
    let sideCards = getSideCards(deck, 5).map((val) => ({...val, flipped: false}));
    console.log(acesInitial);
    return {
        deck: deck,
        sideCards: sideCards,
        aces: acesInitial.slice(),
        lastFlippedPosition: -1
    };
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = resetGame();

        this.onPress = this.onPress.bind(this);
        this.flipCardIfNeeded = this.flipCardIfNeeded.bind(this);
        this.moveAce = this.moveAce.bind(this);
    }

    onPress(suit) {
        console.log('Clicked card of suit ' + suit);
        this.moveAce(suit, FORWARD);
    }

    flipCardIfNeeded(position) {
        let state = this.state;
        let sideCards = state.sideCards;

        if(position <= state.lastFlippedPosition) {
            // don't need to flip card
            return;
        }

        console.log(`Flip card because moved card position is ${position} and last flipped was ${state.lastFlippedPosition}`);

        let toFlipPosition = state.lastFlippedPosition + 1;
        let cardToFlip = sideCards[toFlipPosition];

        let flippedCard = {...cardToFlip, flipped: true};

        sideCards[toFlipPosition] = flippedCard;

        let newState = {
            sideCards: sideCards,
            lastFlippedPosition: toFlipPosition
         };

        this.setState({...state, ...newState});

        this.moveAce(flippedCard.suit, BACKWARD);
    }

    moveAce(cardSuit, direction) {
        console.log(`Move ace of ${cardSuit} ${direction}`);
        // find ace to move
        let aces = this.state.aces;
        let aceToMovePos = aces.findIndex((card) => card.suit == cardSuit);
        let aceToMove = aces[aceToMovePos];

        let pos = 0;
        if(direction == FORWARD) {
            pos = aceToMove.position + 1;
        } else if(direction == BACKWARD) {
            pos = aceToMove.position - 1;
            pos = (pos < -1) ? -1 : pos; // can't go lower than -1
        }

        if(pos >= this.state.sideCards.length) {
            let message = capitalizeWord(cardSuit) + ' won!'
            console.log(message);
            Alert.alert(
                'Game Over',
                message,
                [
                    {text: 'OK', onPress: () => this.setState(resetGame())}
                ]
            );
            return;
        }

        aceToMove = {...aceToMove, position: pos};

        aces[aceToMovePos] = aceToMove;

        this.setState({...this.state, aces: aces});

        setTimeout(()=>this.flipCardIfNeeded(pos), 500);
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
                    onPress={this.onPress}
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
    marginTop: CARD_HEIGHT+CARD_MARGIN_TOP,
  }
});
