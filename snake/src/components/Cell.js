/**
 * Created by cuyu on 3/31/17.
 */
import React, {Component, PropTypes} from 'react'
import './Cell.css'
import {COLOR_MAP} from '../constants/color-mapping'


class Cell extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        let color = COLOR_MAP[this.props.value.toString()];
        return (
            <div className="Cell" style={{'backgroundColor': color}}>
            </div>
        );
    }
}

export default Cell