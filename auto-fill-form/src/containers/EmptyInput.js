/**
 * Created by cuyu on 3/17/17.
 */

import {cache} from '../actions/action-creator'
import BaseInput from '../components/BaseInput'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state)
    return {
        value: state[ownProps.id].value,
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleValueChange: (event) => {
            console.log(event.target.value);
            dispatch(cache(ownProps.id, event.target.value));
        },
    }
};

const EmptyInput = connect(mapStateToProps, mapDispatchToProps)(BaseInput);

export default EmptyInput