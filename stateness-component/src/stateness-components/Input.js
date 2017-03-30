/**
 * Created by cuyu on 3/30/17.
 */

import React, {Component, PropTypes} from 'react';
import {createStore, combineReducers} from "redux";
import inputReducer from '../reducers/input-reducer'
import EmptyInput from '../containers/EmptyInput'
import {Provider} from 'react-redux'


export function getStore() {
    let rootReducer = combineReducers({value: inputReducer});
    return createStore(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}


class Input extends Component {
    render() {
        let store;
        'store' in this.props ? store = this.props.store : store = getStore();

        return (
            <Provider store={store}>
                <EmptyInput {...this.props}/>
            </Provider>
        );
    }
}

export default Input