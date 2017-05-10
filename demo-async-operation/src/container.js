/**
 * Created by cuyu on 5/10/17.
 */
import {connect} from 'react-redux'
import axios from 'axios'
import App from './App'


const mapStateToProps = (state, ownProps) => {
    return state;
};


async function asyncCall(dispatch, ownProps) {
    try {
        const jsData = await ownProps.promise;
        dispatch({type: 'UPDATE_DATA', data: jsData.data});
    }
    catch (error) {
        dispatch({type: 'UPDATE_ERROR', error: error});
    }
    try {
        const pyData = await axios.get('https://api.github.com/search/repositories?q=python&sort=stars');
        dispatch({type: 'UPDATE_DATA', data: pyData.data});
    }
    catch (error) {
        dispatch({type: 'UPDATE_ERROR', error: error});
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlePromise: () => {
            asyncCall(dispatch, ownProps);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);