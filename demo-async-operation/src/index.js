import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './container';
import axios from 'axios'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducer'
import './index.css';


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    (<Provider store={store}>
        <AppWrapper promise={axios.get('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>
    </Provider>),
    document.getElementById('root')
);
