import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'

export default class MainTabSalerInComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '0'
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === '0'}
                        //标题
                        title="首页"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon}
                                                 source={require("../res/drawable/ic_find_room_normal.png")}/>}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon]}
                                                         source={require("../res/drawable/ic_find_room_selected.png")}/>}
                        //点击Event
                        onPress={() => this.setState({selectedTab: '0'})}>
                        <View style={styles.page0}>
                            <Text style={{fontSize: 18, padding: 15, color: 'blue'}}>This is 首页 Page</Text>
                        </View>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === '1'}
                        //标题
                        title="业主加盟"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon}
                                                 source={require("../res/drawable/ic_owner_join_normal.png")}/>}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon]}
                                                         source={require("../res/drawable/ic_owner_join_selected.png")}/>}
                        //点击Event
                        onPress={() => this.setState({selectedTab: '1'})}>
                        <View style={styles.page0}>
                            <Text style={{fontSize: 18, padding: 15, color: 'blue'}}>This is 业主加盟 Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});