import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './container';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import './index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    (<Provider store={store}>
        <AppWrapper/>
    </Provider>),
    document.getElementById('root')
);
