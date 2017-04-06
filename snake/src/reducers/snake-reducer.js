/**
 * Created by cuyu on 3/31/17.
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function initState(width, height, snakeLength) {
    console.assert(snakeLength <= width, 'The snakeLength should not larger than matrix width.');
    let state = {
        matrix: {
            value: [],
            width: width,
            height: height,
            apple: getRandomInt(snakeLength, width * height),
        },
        snake: {
            occupy: [],  // Snake head is the last item of {state.snake.occupy} and tail is the first one
            direction: 'down',
            dead: false,
        }
    };
    for (let i = 0; i < width * height; ++i) {
        state.matrix.value.push(0);
    }
    for (let i = 0; i < snakeLength; ++i) {
        state.matrix.value[i] = 1;
        state.snake.occupy.push(i);
    }
    state.matrix.value[state.matrix.apple] = 2;
    return state;
}


function snakeMove(state) {
    let newState = snakeGrow(state);
    let head = newState.snake.occupy[newState.snake.occupy.length - 1];
    // Remove the tail if not eat the apple
    if (head!==newState.matrix.apple) {
        newState.matrix.value[newState.snake.occupy[0]] = 0;
        newState.snake.occupy = newState.snake.occupy.slice(1);
    }
    else {
        generateApple(newState);
    }
    return newState;
}


function snakeGrow(state) {
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
    if (copyState.snake.direction === 'right' || copyState.snake.direction === 'left') {  // Crash on the boundary
        if (Math.floor(newHead / copyState.matrix.width) !== Math.floor(head / copyState.matrix.width)) {
            copyState.snake.dead = true;
        }
    }
    if (newHead < 0 || newHead > copyState.matrix.width * copyState.matrix.height) {  // Crash on the boundary
        copyState.snake.dead = true;
    }
    if (copyState.matrix.value[newHead] === 1) {  // Crash on its own body.
        copyState.snake.dead = true;
    }

    if (!copyState.snake.dead) { // Will not update state if snake dead
        copyState.snake.occupy.push(newHead);
        copyState.matrix.value[newHead] = 1; // Any better idea to update the matrix automatically in an efficient way?
    }
    return copyState;
}


function generateApple(state) {
    let appleIndex = getRandomInt(0, state.matrix.width * state.matrix.height - state.snake.occupy.length)
    while (state.matrix.value[appleIndex] === 1) {
        appleIndex += 1;
    }
    state.matrix.apple = appleIndex;
    state.matrix.value[appleIndex] = 2;
}


const defaultState = initState(5, 5, 3);


const snakeReducer = (state = defaultState, action) => {
    if (action.type !== 'INIT' && state.snake.dead) {
        return state;  // Will not update state if snake is dead
    }

    switch (action.type) {
        case 'INIT':
            return initState(action.width, action.height, action.snakeLength);
        case 'MOVE_ON':
            return snakeMove(state);
        case 'CHANGE_DIRECTION':
            let copyState = Object.assign({}, state);
            copyState.snake.direction = action.direction;
            return copyState;
        default:
            return state;
    }
};

export default snakeReducer;