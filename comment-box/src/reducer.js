/**
 * Created by cuyu on 7/3/17.
 */
const _defaultState = {
    input: '',
    comments: [],
};

export default function reducer(state = _defaultState, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // Copy the comments list
            let newList = [];
            for (let i = 0; i < state.comments.length; ++i) {
                newList.push(state.comments[i]);
            }
            newList.push(state.input);
            return {
                ...state,
                input: '',
                comments: newList,
            };

        case 'CHANGE_INPUT':
            return {
                ...state,
                input: action.value,
            };

        default:
            return state;
    }
}