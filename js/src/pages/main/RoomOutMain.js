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


import {MainOutTabs} from "../../common/Router";


export default class RoomOutMain extends Component<{}> {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <MainOutTabs/>
            </View>
        );
    }

}

// paddingTop: StatusBar.currentHeight,