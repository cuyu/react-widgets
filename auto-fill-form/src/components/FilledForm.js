/**
 * Created by cuyu on 3/9/17.
 */
import React, {Component, PropTypes} from 'react';


class FilledForm extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    static defaultProps = {
        firstname: '',
        lastname: '',
        disabled: false,
    };

    render() {
        return (
            <div className="App">
                <label>First name: {this.props.firstname}</label>
                <Input type="text" value={this.props.firstname} disabled={this.props.disabled} name="firstname"/>
                <br/>
                <label>Last name:</label>
                <Input type="text" value={this.props.lastname} disabled={this.props.disabled} name="lastname"/>
                <br/>
                <button onClick={this.props.onClick}>Next/Previous</button>
            </div>
        );
    }
}

export default FilledForm;
