/**
 * Created by cuyu on 3/9/17.
 */

import EmptyForm from '../components/BaseForm'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        firstname: state.value.firstname,
        lastname: state.value.lastname
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
        }
    }
};

const AutoFillForm = connect(mapStateToProps, mapDispatchToProps)(EmptyForm);

export default AutoFillForm