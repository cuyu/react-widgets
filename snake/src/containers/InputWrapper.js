/**
 * Created by cuyu on 4/6/17.
 */
import {cacheInput} from '../actions'
import BaseInput from '../components/Input'
import {connect} from 'react-redux'
import {settingsState, snakeState} from '../selectors'


const mapStateToProps = (state, ownProps) => {
    // Fixme: better solution
    if (ownProps.id === 'score') {
        return {
            value: snakeState(state).matrix.score,
        };
    }
    else {
        return {
            value: settingsState(state)[ownProps.id].value,
        };
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleValueChange: (event) => {
            dispatch(cacheInput(ownProps.id, event.target.value));
        },
    }
};

const InputWrapper = connect(mapStateToProps, mapDispatchToProps)(BaseInput);

export default InputWrapper;