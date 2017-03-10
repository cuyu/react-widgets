/**
 * Created by cuyu on 3/9/17.
 */
import {renderFilledForm} from '../index'
import {cache} from '../actions/action-creator'
import BaseForm from '../components/BaseForm'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => {
    return {
        firstname: state.value.firstname,
        lastname: state.value.lastname,
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            renderFilledForm();
        },

        handleFirstnameChange: (event) => {
            console.log(event.target.value);
            dispatch(cache(event.target.value, null));
        },

        handleLastnameChange: (event) => {
            console.log(event.target.value);
            dispatch(cache(null, event.target.value));
        }
    }
};

const EmptyForm = connect(mapStateToProps, mapDispatchToProps)(BaseForm);

export default EmptyForm