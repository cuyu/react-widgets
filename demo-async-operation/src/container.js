/**
 * Created by cuyu on 5/10/17.
 */
import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initPage: () => {
            dispatch({type: 'SAGA_GET_BACKEND'});
        },

        handleInputChange: (event) => {
            dispatch({type: 'SAGA_INPUT_CHANGE', value: event.target.value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);