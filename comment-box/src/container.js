/**
 * Created by cuyu on 7/3/17.
 */
import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: () => {
            dispatch({type: 'ADD_COMMENT'});
        },

        handleInputChange: (event) => {
            dispatch({type: 'CHANGE_INPUT', value: event.target.value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);