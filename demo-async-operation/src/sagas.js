/**
 * Created by cuyu on 5/11/17.
 */
import {put, takeEvery, select, call} from 'redux-saga/effects'
import axios from 'axios'


function* getHottestRepoAsync(action) {
    const state = yield select();
    try {
        const response = yield call(axios.get, `https://api.github.com/search/repositories?q=${state.input}&sort=stars`);
        yield put({type: 'UPDATE_DATA', data: response.data});
    }
    catch (error) {
        yield put({type: 'UPDATE_ERROR', error: error});
    }
}

function* handleInputChange(action) {
    yield put({type: 'INPUT_CHANGE', value: action.value});
    const state = yield select();
    if (state.validInput) {
        yield put({type: 'SAGA_GET_BACKEND'});
    }
}

function* watchAsync() {
    yield takeEvery('SAGA_GET_BACKEND', getHottestRepoAsync);
    yield takeEvery('SAGA_INPUT_CHANGE', handleInputChange);
}

export default function* rootSaga() {
    yield [
        watchAsync(),
    ]
}