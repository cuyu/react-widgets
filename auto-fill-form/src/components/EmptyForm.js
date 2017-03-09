import React, {Component, PropTypes} from 'react';


class Input extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.state = {value: this.props.value};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <input {...this.props} value={this.state.value} onChange={this.handleChange}/>
        );
    }
}


class EmptyForm extends Component {
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

export default EmptyForm;
