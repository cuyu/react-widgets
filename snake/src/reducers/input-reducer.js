/**
 * Created by cuyu on 4/6/17.
 */

export default function generateInputReducer(id, defaultValue = '') {
    return function (state = {value: defaultValue}, action) {
        // Will only be executed if id is satisfied.
        if (action.id !== id) {
            return state;
        }

        switch (action.type) {
            case 'CACHE_INPUT':
                if (state.value !== action.value) {
                    return {
                        value: action.value
                    };
                }
                else {
                    return state;
                }

            default:
                return state;
        }
    }
}