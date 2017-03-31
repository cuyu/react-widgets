/**
 * Created by cuyu on 3/31/17.
 */

export const resetMatrix = function (height, width) {
    return {
        type: 'INIT',
        height: height,
        width: width
    };
};

export const changeCell = function (id, value) {
    return {
        type: 'CHANGE',
        id: id,
        value: value
    }
};