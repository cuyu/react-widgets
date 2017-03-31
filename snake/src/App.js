import React, {Component} from 'react';
import MatrixWrapper from './containers/MatrixWrapper'


class App extends Component {
    render() {
        return (
            <div className="App">
                <MatrixWrapper height={10} width={10}/>
            </div>
        );
    }
}

export default App;
