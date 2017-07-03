import React, {Component} from 'react';


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
    render() {
        return (
            <div className="comment-box">
                <table border="1" className="comment-list">
                    <Comment content="aaabbb"/>
                    <Comment content="aaabbb"/>
                </table>
                <textarea cols="40" rows="5" className="text-area"></textarea>
                <br/>
                <button>Add Comment</button>
            </div>
        );
    }
}

export default App;
