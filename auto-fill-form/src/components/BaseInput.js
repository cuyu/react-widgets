/**
 * Created by cuyu on 3/17/17.
 */
import React, {Component, PropTypes} from 'react';


function filterObject(target, whiteList) {
    let result = {};
    for (let i = 0; i < whiteList.length; ++i) {
        if (whiteList[i] in target) {
            result[whiteList[i]] = target[whiteList[i]];
        }
    }
    return result;
}


class BaseInput extends Component {
    static propTypes = {
        handleValueChange: PropTypes.func.isRequired,
    };

    render() {
        let filteredProps = filterObject(this.props, ['disabled', 'name']);
        return (
            <input {...filteredProps} type="text" value={this.props.value} onChange={this.props.handleValueChange}/>
        );
    }
}

export default BaseInput;
