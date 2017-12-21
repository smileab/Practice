import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class OutProfile extends Component {
    render() {
        return (

            <View style={styles.content}>

                <Text style={styles.text}>
                    Out 我的
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f8f9',
    },

    text: {
        fontSize: 24,
        color: '#333333',
    },


});