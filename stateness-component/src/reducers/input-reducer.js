/**
 * Created by cuyu on 3/9/17.
 */

export default function (state = {value: ''}, action) {
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
