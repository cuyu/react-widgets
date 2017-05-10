/**
 * Created by cuyu on 5/10/17.
 */
import {connect} from 'react-redux'
import axios from 'axios'
import App from './App'


const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlePromise: () => {
            ownProps.promise.then(
                value => {
                    axios.get('https://api.github.com/search/repositories?q=python&sort=stars').then(
                        value => {
                            dispatch({type: 'UPDATE_DATA', data: value.data});
                        },
                        error => {
                            dispatch({type: 'UPDATE_ERROR', error: error})
                        }
                    );
                    dispatch({type: 'UPDATE_DATA', data: value.data})
                },
                error => {
                    dispatch({type: 'UPDATE_ERROR', error: error})
                }
            );
        },
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);