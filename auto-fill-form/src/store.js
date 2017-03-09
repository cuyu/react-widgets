/**
 * Created by cuyu on 3/9/17.
 */

import {createStore, combineReducers} from 'redux'
import formReducer from './reducers/form-reducer'

let reducer = combineReducers({value: formReducer});
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// let store = createStore(reducer);

export {store}