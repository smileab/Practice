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


import InMain from './RoomInMain';
import OutMain from './RoomOutMain';
import Login from './Login';

import {DrawerNavigator} from 'react-navigation';

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MainNav = DrawerNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            drawerLabel: 'Login',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_owner_join_selected.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Home: {
        screen: InMain,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_owner_join_selected.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Notifications: {
        screen: OutMain,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_me_normal.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
});


export default class Main extends Component<{}> {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <MainNav/>
            </View>
        );
    }

}