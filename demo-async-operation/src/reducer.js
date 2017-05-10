/**
 * Created by cuyu on 5/10/17.
 */

const _defaultState = {
    loading: true,
    error: null,
    data: null,
};

export default function reducer(state = _defaultState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                loading: false,
                error: null,
                data: action.data,
            };

        case 'UPDATE_ERROR':
            return {
                loading: false,
                error: action.error,
                data: null,
            };

        default:
            return state;
    }
}