/**
 * Created by cuyu on 5/10/17.
 */

const VALID_CATEGORIES = ['python', 'javascript', 'ruby', 'perl', 'java', 'c', 'go', 'scala', 'css'];

const _defaultState = {
    loading: true,
    error: null,
    data: null,
    input: 'javascript',
    validInput: true,
    category: 'Javascript',
};

export default function reducer(state = _defaultState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                loading: false,
                data: action.data,
            };

        case 'UPDATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case 'INPUT_CHANGE':
            const isValid = VALID_CATEGORIES.includes(action.value);
            const category = isValid? action.value.charAt(0).toUpperCase() + action.value.slice(1) : state.category;
            const loading = isValid? true : state.loading;
            return {
                ...state,
                input: action.value,
                validInput: isValid,
                category: category,
                loading: loading,
            };

        default:
            return state;
    }
}