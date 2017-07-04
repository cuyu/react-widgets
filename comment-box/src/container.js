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
        },

        handleCommentDelete: (number) => {
            return (event) => {
                event.preventDefault();  // Default reaction of <a> will make the browser go to another link
                dispatch({type: 'DELETE_COMMENT', index: number});
            }
        },

        handleCollapse: (event) => {
            event.preventDefault();
            dispatch({type: 'COLLAPSE_COMMENT',});
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);