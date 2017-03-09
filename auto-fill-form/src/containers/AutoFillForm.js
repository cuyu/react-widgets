/**
 * Created by cuyu on 3/9/17.
 */

import {cache} from '../actions/action-creator'
import EmptyForm from '../components/EmptyForm'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        firstname: state.value.firstname,
        lastname: state.value.lastname,
        disabled: state.value.disabled
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log('onClick', ownProps.firstname)
            dispatch(cache('aaa', ownProps.lastname, true))
        }
    }
};

const AutoFillForm = connect(mapStateToProps, mapDispatchToProps)(EmptyForm);

export default AutoFillForm