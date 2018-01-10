import * as Types from './Types';

// 模拟服务器返回的用户信息
let user = {
    name: 'admin',
    age: '24'
}

// 执行登录
export function doLogin() {
    return dispatch => {
        dispatch(isLogining());
        fetch('https://github.com/').then(() => {
            dispatch(loginSuccess(user));
        }).catch(() => {
            dispatch(loginFailure());
        });
    }
}

// 正在登录
function isLogining() {
    return {
        rdType: Types.LOGGED_DOING
    }
}

// 登录完成
function loginSuccess(user) {
    return {
        rdType: Types.LOGGED_SUCCESS,
        rdPayload: user,
    }
}

// 登录失败
function loginFailure() {
    return {
        rdType: Types.LOGGED_FAILURE,
    }
}

