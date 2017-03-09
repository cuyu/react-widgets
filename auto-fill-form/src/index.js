import React from 'react';
import ReactDOM from 'react-dom';
import EmptyForm from './components/EmptyForm';
import FilledForm from './components/FilledForm'
import AutoFillForm from './containers/AutoFillForm'
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store'
import {Router, Route, browserHistory} from 'react-router'

ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={AutoFillForm}/>
                <Route path="/filled" component={FilledForm}/>
            </Router>
        </Provider>),
    document.getElementById('root')
);
