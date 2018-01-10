import * as Types from '../action/Types';

// 初始状态
const initialState = {
    rdType: Types.LOGGED_INIT,
    rdPayload: null,
}

export default function loginIn(state = initialState, action) {
    switch (action.rdType) {
        case Types.LOGGED_INIT: // 初始状态
            return Object.assign({}, state, {
                rdType: Types.LOGGED_INIT,
                rdPayload: null
            });
        case Types.LOGGED_DOING: // 正在登录
            return Object.assign({}, state, {
                rdType: Types.LOGGED_DOING,
                rdPayload: null
            });
        case Types.LOGGED_SUCCESS: // 登录完成
            return Object.assign({}, state, {
                rdType: Types.LOGGED_SUCCESS,
                rdPayload: action.rdPayload
            })
        case Types.LOGGED_FAILURE: // 登录失败
            return Object.assign({}, state, {
                rdType: Types.LOGGED_FAILURE,
                rdPayload: null,
            })
        default:
            return state;
    }
}
