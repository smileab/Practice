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

export default class Main extends Component<{}> {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonPress);
    }

    render() {
        return (

            <DrawerLayoutAndroid
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={Dimensions.get('window').width - 50}
                keyboardDismissMode="on-drag"
                onDrawerOpen={() => {
                    this._overrideBackPressForDrawerLayout = true;
                }}
                onDrawerClose={() => {
                    this._overrideBackPressForDrawerLayout = false;
                }}
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                renderNavigationView={this._renderDrawerNavigation}
                statusBarBackgroundColor="#589c90">
                {this._renderDrawerContent()}
            </DrawerLayoutAndroid>

        );
    }


    _renderDrawerNavigation = () => {
        return (
            <View style={styles.drawerContentNavigation}>

                <View style={styles.drawerContentNavigationItem}>
                    <Text style={styles.drawerContentNavigationItemText}>
                        111
                    </Text>
                </View>
                <View style={styles.drawerContentNavigationItemLine}/>
                <View style={styles.drawerContentNavigationItem}>
                    <Text style={styles.drawerContentNavigationItemText}>
                        222
                    </Text>
                </View>
                <View style={styles.drawerContentNavigationItemLine}/>
                <View style={styles.drawerContentNavigationItem}>
                    <Text style={styles.drawerContentNavigationItemText}>
                        333
                    </Text>
                </View>
                <View style={styles.drawerContentNavigationItemLine}/>
            </View>
        );
    };


    _renderDrawerContent() {

        return (
            <View style={styles.drawerContentContent}>
                {/*<DKRouter/>*/}
                <DKTabNavigator/>
            </View>
        );
    }

    _handleBackButtonPress = () => {
        if (this._overrideBackPressForDrawerLayout) {
            this.drawer && this.drawer.closeDrawer();
            return true;
        }
        return false;
    };

}

const styles = StyleSheet.create({

    drawerContentNavigation: {
        flexDirection: 'column',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#f7f8f9',
    },

    drawerContentNavigationItem: {
        flexDirection: 'column',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    drawerContentNavigationItemText: {
        color: '#333333',
        fontSize: 20,
    },

    drawerContentNavigationItemLine: {
        backgroundColor: '#999999',
        height: 0.5,
    },

    drawerContentContent: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',

    },

});
