/**
 * Created by cuyu on 3/31/17.
 */
import {settingsState} from '../selectors'


function initMatrix(width, height, snakeLength, difficulty) {
    return {
        type: 'INIT',
        width: width,
        height: height,
        snakeLength: snakeLength,
        difficulty: difficulty,
    };
}

// Use thunk middleware so that we can get the whole state in the action
export function resetMatrix() {
    return (dispatch, getState) => {
        let state = settingsState(getState());
        dispatch(initMatrix(state.width.value, state.height.value, state.snakeLength.value, state.difficulty.value));
    };
}


export const changeDirection = function (newDirection) {
    return {
        type: 'CHANGE_DIRECTION',
        direction: newDirection,
    }
};

export const moveOn = function () {
    return {
        type: 'MOVE_ON',
    }
};

export const cacheInput = (id, value) => {
    return {
        type: 'CACHE_INPUT',
        id: id,
        value: value,
    }
};