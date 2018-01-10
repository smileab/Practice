import React from 'react';

import {
    Image, StyleSheet,
} from 'react-native';


// import Colors from '../../res/values/Colors';
// import Dimens from '../../res/values/Dimens';
import {DrawerNavigator, StackNavigator, TabNavigator} from 'react-navigation';


// import Main from '../pages/Main';

import Launch from '../pages/Launch';// 启动页
import Login from "../pages/Login";

import RoomInMain from "../pages/main/RoomInMain";
import RoomOutMain from "../pages/main/RoomOutMain";

import RoomInHome from "../pages/main/RoomInHome";
import RoomInProfile from "../pages/main/RoomInProfile";
import RoomOutHome from "../pages/main/RoomOutHome";
import RoomOutProfile from "../pages/main/RoomOutProfile";

// 主页
export const ROUTER_LAUNCH = 'Launch';
export const ROUTER_MAIN = 'Main';


export const MainInTabs = TabNavigator({

    Home: {
        screen: RoomInHome,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_owner_join_selected.png')}/>,
        }
    },

    Profile: {
        screen: RoomInProfile,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_me_selected.png')}/>,
        }
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#21b38a',
        inactiveTintColor: '#666666',
        indicatorStyle: {
            height: 0,
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 8,
            marginTop: 6,
        },
        tabStyle: {
            height: 56,
        },
        iconStyle: {
            width: 14,
            height: 14,
        },
        style: {
            backgroundColor: 'white',
        }

    },

});

export const MainOutTabs = TabNavigator({

    Home: {
        screen: RoomOutHome,
        navigationOptions: {
            tabBarLabel: 'o首页',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_owner_join_selected.png')}/>,
        }
    },

    Profile: {
        screen: RoomOutProfile,
        navigationOptions: {
            tabBarLabel: 'o我的',
            tabBarIcon: () => <Image
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 8,
                }}
                source={require('../../res/drawable/ic_me_selected.png')}/>,
        }
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#21b38a',
        inactiveTintColor: '#666666',
        indicatorStyle: {
            height: 0,
        },
        labelStyle: {
            fontSize: 12,
            marginBottom: 8,
            marginTop: 6,
        },
        tabStyle: {
            height: 56,
        },
        iconStyle: {
            width: 14,
            height: 14,
        },
        style: {
            backgroundColor: 'white',
        }

    },
});


export const MainDrawer = DrawerNavigator({

    RoomIn: {
        screen: RoomInMain,
        navigationOptions: {
            drawerLabel: 'RoomIn',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_owner_join_selected.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    RoomOut: {
        screen: RoomOutMain,
        navigationOptions: {
            drawerLabel: 'RoomOut',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_me_normal.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            drawerLabel: 'Login',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/drawable/ic_owner_join_selected.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
}
// , {
//     drawerWidth: 200, // 抽屉宽
//     drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    // contentOptions: {
    //     // initialRouteName: Login, // 默认页面组件
    //     activeTintColor: 'white',  // 选中文字颜色
    //     inactiveTintColor: '#666',  // 未选中文字颜色
    //     activeBackgroundColor: '#ff8500', // 选中背景颜色
    //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
    //     // style: {  // 样式
    //     //
    //     // }
    // }
// }
);

export default Router = StackNavigator({

    Launch: {
        screen: Launch,
        navigationOptions: {
            header: null,
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },

    Main: {
        screen: MainDrawer,
        navigationOptions: {
            header: null,
        }
    }

});


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
