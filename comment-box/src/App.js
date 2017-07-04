import React, {Component, PropTypes} from 'react';


class Comment extends Component {
    render() {
        return (
            <tr>
                <td className="comment">
                    {this.props.content}
                </td>
            </tr>
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
                <table className="comment-list">
                    {this.props.comments.map((item) => <Comment content={item}/>)}
                </table>
                <textarea cols="40" rows="5" className="text-area" onChange={this.props.handleInputChange}
                          value={this.props.input}></textarea>
                <br/>
                <button onClick={this.props.handleSubmit}>Add Comment</button>
            </div>
        );
    }
}

export default App;
