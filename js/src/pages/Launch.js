import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import StatusBar from 'StatusBar';

import {ROUTER_MAIN} from '../common/Router';

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

            <View style={styles.launchContent}>

                <Text style={styles.launchTextTitle}>
                    Hello World React Native!
                </Text>

            </View>

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
