/**
 * Created by cuyu on 5/10/17.
 */
import {connect} from 'react-redux'
import axios from 'axios'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    return state;
};

async function getBackend(dispatch, getState) {
    const state = getState();
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${state.input}&sort=stars`);
        dispatch({type: 'UPDATE_DATA', data: response.data});
    }
    catch (error) {
        dispatch({type: 'UPDATE_ERROR', error: error});
    }
}

function initPage() {
    return function (dispatch, getState) {
        getBackend(dispatch, getState);
    }
}

function handleInputChange(event) {
    return function asyncCall(dispatch, getState) {
        dispatch({type: 'INPUT_CHANGE', value: event.target.value});
        const state = getState();
        if (state.validInput) {
            getBackend(dispatch, getState);
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initPage: () => {
            dispatch(initPage());
        },

        handleInputChange: (event) => {
            dispatch(handleInputChange(event));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);