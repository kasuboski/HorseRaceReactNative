import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './Card.js';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.markers}>
                    <Card imageFile={require('../images/cards/back.png')} />
                    <Card imageFile={require('../images/cards/back.png')} />
                    <Card imageFile={require('../images/cards/back.png')} />
                    <Card imageFile={require('../images/cards/back.png')} />
                    <Card imageFile={require('../images/cards/back.png')} />
                </View>

                <View style={styles.aces}>
                    <Card containerStyle={{marginTop: 220}} imageFile={require('../images/cards/ace_of_clubs.png')} />
                    <Card containerStyle={{marginTop: 110}} imageFile={require('../images/cards/ace_of_spades.png')} />
                    <Card imageFile={require('../images/cards/ace_of_hearts.png')} />
                    <Card imageFile={require('../images/cards/ace_of_diamonds.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8E443D',
    paddingTop: 10,
    paddingHorizontal: 10,
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
