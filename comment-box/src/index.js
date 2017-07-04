import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './container';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducer'
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
