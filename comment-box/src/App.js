import React, {Component, PropTypes} from 'react';


class Comment extends Component {
    render() {
        return (
            <table className="comment">
                <tr>
                    <th>
                        {this.props.time}
                    </th>
                </tr>
                <tr>
                    <td>
                        {this.props.content}
                    </td>
                </tr>
            </table>
        );
    }
}


class App extends Component {
    static propTypes = {
        handleInputChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="comment-box">
                {this.props.comments.map((item) => <Comment content={item.comment} time={item.time} />)}
                <textarea cols="40" rows="5" className="text-area" onChange={this.props.handleInputChange}
                          value={this.props.input}></textarea>
                <br/>
                <button onClick={this.props.handleSubmit}>Add Comment</button>
            </div>
        );
    }
}

export default App;
