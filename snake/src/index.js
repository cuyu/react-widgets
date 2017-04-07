import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);


/****** The example state is like below: ******/
// exampleState = {
//     matrix: {
//         value: [0, 0, 0, 1, 1, 0, 0, 0, 0], // The status of each cell on the matrix
//         width: 3,
//         height: 3,
//     },
//     snake: {
//         occupy: [3, 4], // The index cell of the snake body
//         direction: 'down' // The direction of the snake head
//     }
// };


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
