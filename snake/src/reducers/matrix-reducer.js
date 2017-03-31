/**
 * Created by cuyu on 3/31/17.
 */

const matrixReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'INIT':
            newState = [];
            for (let i = 0; i < action.height * action.width; ++i) {
                newState.push({value: 0});
            }
            return newState;
        case 'CHANGE':
            newState = state.slice(0);
            newState[action.id].value = action.value;
            return newState;
        default:
            return state;
    }
};

export default matrixReducer;