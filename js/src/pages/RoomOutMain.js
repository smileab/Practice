/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';


import {TabNavigator} from 'react-navigation';

import OutHome from "./RoomOutHome";
import OutProfile from "./RoomOutProfile";

export const MainInTabs = TabNavigator({
    Home: {
        screen: OutHome,
        navigationOptions: {
            tabBarLabel: 'o首页',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_owner_join_selected.png')}/>,
        }
    },
    Profile: {
        screen: OutProfile,
        navigationOptions: {
            tabBarLabel: 'o我的',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_me_selected.png')}/>,
        }
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#21b38a',
        inactiveTintColor: '#666666',
        indicatorStyle: {
            height: 0,
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 8,
            marginTop: 6,
        },
        tabStyle: {
            height: 56,
        },
        iconStyle: {
            width: 14,
            height: 14,
        },
        style: {
            backgroundColor: 'white',
        }

    },
});




export default class InMain extends Component<{}> {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <MainInTabs/>
            </View>
        );
    }

}

// paddingTop: StatusBar.currentHeight,