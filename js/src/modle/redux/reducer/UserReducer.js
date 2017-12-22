import * as Types from '../action/Types';

// 初始状态
const initialState = {
    status: 'init', // init,doing,done
    isSuccess: false,
    user: null,
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case Types.LOGGED_INIT: // 初始状态
            return Object.assign({}, state, {
                status: Types.LOGGED_INIT,
                isSuccess: false,
                user: null
            });
        case Types.LOGGED_DOING: // 正在登录
            return Object.assign({}, state, {
                status: Types.LOGGED_DOING,
                isSuccess: false,
                user: null
            });
        case Types.LOGGED_IN: // 登录完成
            return Object.assign({}, state, {
                status: Types.LOGGED_IN,
                isSuccess: action.isSuccess,
                user: action.user
            })
        default:
            return state;
    }
}