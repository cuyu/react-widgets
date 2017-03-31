/**
 * Created by cuyu on 3/31/17.
 */

import {combineReducers} from 'redux'
import matrixReducer from './matrix-reducer'


let rootReducer = combineReducers({
    matrix: matrixReducer
});

export default rootReducer;