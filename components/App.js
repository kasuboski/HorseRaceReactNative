import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import Card, {CARD_HEIGHT} from './Card.js';

const sideCards = [
    {
        flipped: false,
        imageFile: require('../images/cards/2_of_spades.png')
    },
    {
        flipped: false,
        imageFile: require('../images/cards/3_of_spades.png')
    },
    {
        flipped: true,
        imageFile: require('../images/cards/2_of_hearts.png')
    }
];

const aces = [
    {
        suit: 'clubs',
        position: 1,
        image: require('../images/cards/ace_of_clubs.png')
    },
    {
        suit: 'spades',
        position: 0,
        image: require('../images/cards/ace_of_spades.png')
    },
    {
        suit: 'hearts',
        position: 2,
        image: require('../images/cards/ace_of_hearts.png')
    },
    {
        suit: 'diamonds',
        position: 0,
        image: require('../images/cards/ace_of_diamonds.png')
    },
];

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* need wrapper view for ScrollView to scroll */}
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <View style={styles.markers}>
                            {sideCards.map((cardInfo, id) => {
                                const cardImage = cardInfo.flipped ? cardInfo.imageFile : require('../images/cards/back.png');
                                return (
                                    <Card key={id}
                                        imageFile={cardImage} />
                                );
                            })}
                        </View>

                        <View style={styles.aces}>
                            {aces.map((info, id) => {
                                const style = {marginTop: ((CARD_HEIGHT + 10) * info.position)};
                                return <Card key={id}
                                    containerStyle={style}
                                    imageFile={info.image} />
                            })}

                        </View>
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
