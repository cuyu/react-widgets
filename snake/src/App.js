import React, {Component} from 'react';
import MatrixWrapper from './containers/MatrixWrapper'
import Dashboard from './components/Dashboard'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Dashboard/>
                <MatrixWrapper/>
            </div>
        );
    }
}

export default App;
