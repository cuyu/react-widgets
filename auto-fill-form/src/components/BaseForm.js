import React, {Component} from 'react';
import EmptyInput from '../containers/EmptyInput'
import {renderFilledForm} from '../index'


class BaseForm extends Component {
    handleClick() {
        renderFilledForm();
    }

    render() {
        return (
            <div className="App">
                <label>First name:</label>
                <EmptyInput disabled={this.props.disabled} id="firstname"/>
                <br/>
                <label>Last name:</label>
                <EmptyInput disabled={this.props.disabled} id="lastname"/>
                <br/>
                <button onClick={this.handleClick} disabled={this.props.disabled}>Fill</button>
            </div>
        );
    }
}

export default BaseForm;
