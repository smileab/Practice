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


    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成，且成功登录
        if (nextProps.status === Types.LOGGED_IN && nextProps.isSuccess) {
            return true;
        }
        return false;
    }


    render() {

        let tips;
        if (this.props.status === Types.LOGGED_INIT) {
            tips = '请点击登录';
        }
        else if (this.props.status === Types.LOGGED_DOING) {
            tips = '正在登录...';
        }
        else if (this.props.status === Types.LOGGED_IN && !this.props.isSuccess) {
            tips = '登录失败, 请重新登录';
        }

        let userInfo = "";
        if(this.props.user.name){
            userInfo = "name="+this.props.user.name +"   age="+this.props.user.age;
        }

        return (

            <View style={styles.content}>

                <Text style={styles.textTitle}>
                    登录页
                </Text>

                <Text style={styles.textLogin}>{tips}    {userInfo}</Text>

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


function select(store) {
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}

export default connect(select)(Login);


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
