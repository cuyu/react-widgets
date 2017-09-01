import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInputChange: (event) => {
            dispatch({type: 'INPUT_CHANGE', value: event.target.value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);