import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import SideCards from './SideCards.js';
import HorseCards from './HorseCards.js';

const sideCards = [
    {
        flipped: false,
        imageFile: {uri: 'card_2_of_spades'},
        suit: 'spades'
    },
    {
        flipped: false,
        imageFile: {uri: 'card_3_of_spades'},
        suit: 'spades'
    },
    {
        flipped: true,
        imageFile: {uri: 'card_2_of_hearts'},
        suit: 'hearts'
    }
];

const aces = [
    {
        suit: 'clubs',
        position: 1,
        image: {uri: 'card_ace_of_clubs'}
    },
    {
        suit: 'spades',
        position: 0,
        image: {uri: 'card_ace_of_spades'}
    },
    {
        suit: 'hearts',
        position: 2,
        image: {uri: 'card_ace_of_hearts'}
    },
    {
        suit: 'diamonds',
        position: 0,
        image: {uri: 'card_ace_of_diamonds'}
    },
];

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* need wrapper view for ScrollView to scroll */}
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <SideCards
                            containerStyle={styles.markers}
                            cards={sideCards} />

                        <HorseCards
                            containerStyle={styles.aces}
                            cards={aces} />
                    </View>
                </ScrollView>
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
  aces: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  markers: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});
