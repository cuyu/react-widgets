import React from 'react';
import ReactDOM from 'react-dom';
import Input, {getStore} from './stateness-components/Input'


let inputStore1 = getStore();
let inputStore2 = getStore();


ReactDOM.render(
    (
        <div>
            <Input store={inputStore1}/><br/>
            <Input store={inputStore2}/><br/>
            <Input store={inputStore1} disabled/><br/>
            <Input store={inputStore2} disabled/><br/>
        </div>
    ),
    document.getElementById('root')
);
