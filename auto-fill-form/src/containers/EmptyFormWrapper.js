/**
 * Created by cuyu on 3/9/17.
 */
import {cache} from '../actions/action-creator'
import EmptyForm from '../components/EmptyForm'
import {connect} from 'react-redux'


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log('onClick', ownProps.firstname)
            dispatch(cache('aaa', ownProps.lastname, true))
        }
    }
};

const EmptyFormWrapper = connect((state, ownProps) => {
    return {}
}, mapDispatchToProps)(EmptyForm);

export default EmptyFormWrapper