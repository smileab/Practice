import * as Types from './Types';

// 模拟服务器返回的用户信息
let user = {
    'name': 'admin',
    'age': '24'
}

// 执行登录
export function doLogin() {
    return dispatch => {
        dispatch(isLogining());
        fetch('https://github.com/').then(() => {
            dispatch(loginSuccess(true, user));
        }).catch(() => {
            dispatch(loginSuccess(false, null));
        });
    }
}

// 正在登录
function isLogining() {
    return {
        type: Types.LOGGED_DOING
    }
}

// 登录完成
function loginSuccess(isSuccess, user) {
    return {
        type: Types.LOGGED_IN,
        isSuccess: isSuccess,
        user: user
    }
}