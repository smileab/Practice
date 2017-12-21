import React from 'react';

import {
    Image,
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

import Launch from '../pages/Launch';// 启动页
import Main from '../pages/Main';// 主页

export const ROUTER_LAUNCH = 'Launch';
export const ROUTER_MAIN = 'Main';

export default Router = StackNavigator({

    Launch: {
        screen: Launch,
        navigationOptions: {
            header: null,
        }
    },

    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        }
    }

});