/**
 * Created by cuyu on 3/9/17.
 */

import {createStore, combineReducers} from 'redux'
import generateInputReducer from './reducers/input-reducer'

let rootReducer = combineReducers({
    firstname: generateInputReducer('firstname'),
    lastname: generateInputReducer('lastname'),
});

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store}