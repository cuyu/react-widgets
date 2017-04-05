/**
 * Created by cuyu on 3/31/17.
 */

export const resetMatrix = function  (width, height, snakeLength) {
    return {
        type: 'INIT',
        height: height,
        width: width,
        snakeLength: snakeLength,
    };
};


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