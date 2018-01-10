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


import {MainInTabs} from "../../common/Router";

export default class RoomInMain extends Component<{}> {

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