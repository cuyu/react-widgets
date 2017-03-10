/**
 * Created by cuyu on 3/9/17.
 */

export default function (state = {firstname: '', lastname: ''}, action) {
    console.log('state:', state)
    switch (action.type) {
        case 'CACHE':
            return {
                firstname: action.firstname || state.firstname,  // set the state as falsy value if not changed
                lastname: action.lastname || state.lastname,
            };

        default:
            return state
    }
}