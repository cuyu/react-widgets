/**
 * Created by cuyu on 3/17/17.
 */

import {cache} from '../actions/action-creator'
import BaseInput from '../components/BaseInput'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value.value,
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleValueChange: (event) => {
            dispatch(cache(event.target.value));
        },
    }
};

const EmptyInput = connect(mapStateToProps, mapDispatchToProps)(BaseInput);

export default EmptyInput