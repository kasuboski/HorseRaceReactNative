import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './HomeScreen';
import RaceScreen from './RaceScreen';

const App = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar={true}>
                <Scene key='home'
                    component={HomeScreen}
                    initial={true}
                />
                <Scene key='race'
                    component={RaceScreen}
                />
            </Scene>
        </Router>
    );
};

export default App;
