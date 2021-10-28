import React, {Component} from 'react';
import {store} from './redux/store/createStore'
import {Provider} from 'react-redux'
import {Page} from './redux/actions/actions';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Page/>
            </Provider>
        );
    }
}

