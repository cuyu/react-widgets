import React, {Component, PropTypes} from 'react';


class BaseForm extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="App">
                <label>First name:</label>
                <input type="text" disabled={this.props.disabled} value={this.props.firstname}
                       onChange={this.props.handleFirstnameChange} name="firstname"/>
                <br/>
                <label>Last name:</label>
                <input type="text" disabled={this.props.disabled} value={this.props.lastname}
                       onChange={this.props.handleLastnameChange} name="lastname"/>
                <br/>
                <button onClick={this.props.onClick} disabled={this.props.disabled}>Fill</button>
            </div>
        );
    }
}

export default BaseForm;
