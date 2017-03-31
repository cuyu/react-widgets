/**
 * Created by cuyu on 3/31/17.
 */

const matrixReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT':
            let newState = [];
            for (let i = 0; i < action.height * action.width; ++i) {
                newState.push({value: 0});
            }
            console.log(action.height * action.width);
            return newState;
        default:
            return state;
    }
};

export default matrixReducer;