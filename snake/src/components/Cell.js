/**
 * Created by cuyu on 3/31/17.
 */
import React, {Component, PropTypes} from 'react'
import './Cell.css'


class Cell extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className="Cell" style={{'backgroundColor': this.props.value === 1 ? 'black' : 'white'}}>
            </div>
        );
    }
}

export default Cell