import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './container';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import rootReducer from './reducer'


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render((
    <Provider store={store}>
        <AppWrapper/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
