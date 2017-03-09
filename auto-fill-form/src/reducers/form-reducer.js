/**
 * Created by cuyu on 3/9/17.
 */

export default function (state = {firstname: '', lastname: '', disabled: false}, action) {
    console.log('state:', state)
    switch (action.type) {
        case 'CACHE':
            return {
                firstname: action.firstname,
                lastname: action.lastname,
                disabled: action.disabled
            };

        default:
            return state
    }
}