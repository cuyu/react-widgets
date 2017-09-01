import React, {Component} from 'react';

const App = (props) => {
    return (
        <div className="App">
            <input type="text" onChange={props.handleInputChange} value={props.input} />
        </div>
    );
};

export default App;
