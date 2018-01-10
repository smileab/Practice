import React, {Component} from 'react';
import Colors from '../../res/values/Colors';
import Dimens from '../../res/values/Dimens';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import {connect} from 'react-redux';
import {doLogin} from '../modle/redux/action/UserAction'
import * as Types from '../modle/redux/action/Types';

class Login extends Component {

    constructor(props) {
        super(props);
        this.props.rdType = Types.LOGGED_INIT;

    }

    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成，且成功登录
        // if (nextProps.status === Types.LOGGED_SUCCESS) {
            return true;
        // }
        // return false;
    }

    render() {

        let tips;
        if (this.props.rdType === Types.LOGGED_INIT) {
            tips = '请点击登录';
        }
        else if (this.props.rdType === Types.LOGGED_DOING) {
            tips = '正在登录...';
        }
        else if (this.props.rdType === Types.LOGGED_SUCCESS) {
            tips = '登录成功';
        }
        else if (this.props.rdType === Types.LOGGED_FAILURE) {
            tips = '登录失败, 请重新登录';
        }

        let userInfo = "";
        if (this.props.rdPayload) {
            userInfo = "name=" + this.props.rdPayload.name + "   age=" + this.props.rdPayload.age;
        }

        return (

            <View style={styles.content}>

                <Text style={styles.textTitle}>
                    登录页
                </Text>

                <Text style={styles.textLogin}>{tips}</Text>

                <Text style={styles.textLogin}>{userInfo}</Text>

                <Text style={styles.textLogin} onPress={this.handleLogin.bind(this)}>
                    登录
                </Text>

            </View>
        )
    }

    // 执行登录
    handleLogin() {
        this.props.dispatch(doLogin());
    }

}


function update(store) {
    return {
        rdType: store.userReducer.rdType,
        rdPayload: store.userReducer.rdPayload
    }
}

export default connect(update)(Login);


const styles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },

    textTitle: {
        fontSize: Dimens.text24,
        color: Colors.text333,
    },

    textLogin: {
        fontSize: Dimens.text24,
        marginTop: 20,
        color: Colors.text666,
    },


});
