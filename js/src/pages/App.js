import React, {Component} from "react";
import Router from "../common/Router";

import {Provider} from "react-redux";

import configureStore from '../modle/redux/store/Store';

const store = configureStore();

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }

}
