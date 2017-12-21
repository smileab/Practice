/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// import DKTabNavigator from '../DKTabNavigator';
// import DKRouter from './DKRouter';

import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import StatusBar from 'StatusBar';
import Dimensions from 'Dimensions';
import BackHandler from 'BackHandler';


import {TabNavigator} from 'react-navigation';


const HomeScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

export default class Main extends Component<{}> {

    componentWillMount() {
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
            }}>
                <RootTabs/>
            </View>
        );
    }

}

