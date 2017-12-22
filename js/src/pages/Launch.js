import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import StatusBar from 'StatusBar';

import {ROUTER_MAIN} from '../common/Router';


import {Provider} from 'react-redux';
import configureStore from '../modle/redux/store/Store';
const store = configureStore();


export default class Launch extends Component<{}> {

    componentDidMount() {

        const {navigate} = this.props.navigation;

        setTimeout(() => {
                navigate(ROUTER_MAIN)
            },
            1000
        );

    }


    render() {

        return (
            <Provider store={store}>

                <View style={styles.launchContent}>

                    <Text style={styles.launchTextTitle}>
                        Hello World React Native!
                    </Text>

                </View>

            </Provider>

        );
    }

}

const styles = StyleSheet.create({

    launchContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f8f9',
        paddingTop: StatusBar.currentHeight,
    },

    launchTextTitle: {
        fontSize: 24,
        color: '#333333',
    },


});
