import React from 'react';
import ReactDOM from 'react-dom';
import BaseForm from './components/BaseForm'
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store'

ReactDOM.render((
        <Provider store={store}>
            <BaseForm/>
        </Provider>),
    document.getElementById('emptyForm')
);


export function renderFilledForm() {
    ReactDOM.render((
            <Provider store={store}>
                <BaseForm disabled={true}/>
            </Provider>),
        document.getElementById('filledForm')
    );
}