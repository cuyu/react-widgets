/**
 * Created by cuyu on 3/9/17.
 */

export default function generateInputReducer(id) {
    return function (state = {value: ''}, action) {
        // Will only be executed if id is satisfied.
        if (action.id !== id) {
            return state;
        }
        console.log('state:', state)
        switch (action.type) {
            case 'CACHE':
                return {
                    value: action.value
                };

            default:
                return state;
        }
    }
}