import React, {Component, PropTypes} from 'react';


class Comment extends Component {
    static propTypes = {
        time: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        handleDelete: PropTypes.func.isRequired,
    };

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
                    <a href className="comment-button" onClick={this.props.handleDelete}>Delete</a>
                </tr>
            </table>
        );
    }
}


class App extends Component {
    static propTypes = {
        handleInputChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleCommentDelete: PropTypes.func.isRequired,
        handleCollapse: PropTypes.func.isRequired,
        collapseNumber: PropTypes.number,
    };

    render() {
        let displayName, comments;
        if (this.props.collapsed) {
            displayName = 'Show More';
            comments = this.props.comments.slice(-this.props.collapseNumber);
        }
        else {
            displayName = 'Collapse';
            comments = this.props.comments;
        }
        return (
            <div className="comment-box">
                <a href className="comment-button" onClick={this.props.handleCollapse}>{displayName}</a>
                <br/>
                {comments.map((item, number) => <Comment content={item.comment} time={item.time} key={number}
                                                         handleDelete={this.props.handleCommentDelete(number)}/>)}
                <textarea cols="40" rows="5" className="text-area" onChange={this.props.handleInputChange}
                          value={this.props.input}></textarea>
                <br/>
                <button onClick={this.props.handleSubmit}>Add Comment</button>
            </div>
        );
    }
}

export default App;
