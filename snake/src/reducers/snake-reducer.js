/**
 * Created by cuyu on 3/31/17.
 */


function initState(width, height, snakeLength) {
    console.assert(snakeLength <= width, 'The snakeLength should not larger than matrix width.');
    let state = {
        matrix: {
            value: [],
            width: width,
            height: height,
        },
        snake: {
            occupy: [],
            direction: 'down',
        }
    };
    for (let i = 0; i < width * height; ++i) {
        state.matrix.value.push(0);
    }
    for (let i = 0; i < snakeLength; ++i) {
        state.matrix.value[i] = 1;
        state.snake.occupy.push(i);
    }
    return state;
}


function snakeMove(state) {
    let newState = snakeGrow(state);
    // Remove the tail
    newState.matrix.value[newState.snake.occupy[0]] = 0;
    newState.snake.occupy = newState.snake.occupy.slice(1);
    return newState;
}


function snakeGrow(state) {
    // TODO: Check if snake dead
    let copyState = Object.assign({}, state);
    let head = copyState.snake.occupy[copyState.snake.occupy.length - 1];
    let newHead;
    switch (copyState.snake.direction) {
        case 'left':
            newHead = head - 1;
            break;
        case 'right':
            newHead = head + 1;
            break;
        case 'up':
            newHead = head - copyState.matrix.width;
            break;
        case 'down':
            newHead = head + copyState.matrix.width;
            break;
        default:
            throw Error('Direction not supported');
    }
    copyState.snake.occupy.push(newHead);
    copyState.matrix.value[newHead] = 1; // Any better idea to update the matrix automatically in an efficient way?
    return copyState;
}


const defaultState = initState(5, 5, 3);


const snakeReducer = (state = defaultState, action) => {
    // Snake head is the last item of {state.snake.occupy} and tail is the first one
    // The item of {state.occupy} is the index of the cell in Matrix, e.g. 2 is (0, 2) cell
    switch (action.type) {
        case 'INIT':
            return initState(action.width, action.height, action.snakeLength);
        case 'MOVE_ON':
            return snakeMove(state);
        case 'CHANGE_DIRECTION':
            // TODO
            return state;
        default:
            return state;
    }
};

export default snakeReducer;