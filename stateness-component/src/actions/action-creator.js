/**
 * Created by cuyu on 3/9/17.
 */

export const cache = (value) => {
    return {
        type: 'CACHE',
        value: value,
    }
};