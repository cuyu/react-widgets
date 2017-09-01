const _defaultState = {
    input: 'javascript',
};

export default function reducer(state = _defaultState, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                input: action.value,
            };

        default:
            return state;
    }
}