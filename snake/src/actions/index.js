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