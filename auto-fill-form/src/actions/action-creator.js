/**
 * Created by cuyu on 3/9/17.
 */

export const cache = (id, value) => {
    return {
        type: 'CACHE',
        id: id,
        value: value,
    }
};