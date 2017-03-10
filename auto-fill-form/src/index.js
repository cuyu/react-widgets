import React from 'react';
import ReactDOM from 'react-dom';
import EmptyForm from './containers/EmptyForm'
import AutoFillForm from './containers/AutoFillForm'
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store'

ReactDOM.render((
        <Provider store={store}>
            <EmptyForm/>
        </Provider>),
    document.getElementById('root')
);


export function renderFilledForm() {
    ReactDOM.render((
            <Provider store={store}>
                <AutoFillForm disabled={true}/>
            </Provider>),
        document.getElementById('filledForm')
    );
}