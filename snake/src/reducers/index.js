/**
 * Created by cuyu on 3/31/17.
 */
import {combineReducers} from 'redux'
import snakeReducer from './snake-reducer'
import generateInputReducer from './input-reducer'

let rootReducer = combineReducers({
    'game': snakeReducer,
    'settings': combineReducers({
        'difficulty': generateInputReducer('difficulty', 5),
        'width': generateInputReducer('width', 15),
        'height': generateInputReducer('height', 10),
        'snakeLength': generateInputReducer('snakeLength', 4),
    }),
});

export default rootReducer;