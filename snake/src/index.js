import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'


const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
