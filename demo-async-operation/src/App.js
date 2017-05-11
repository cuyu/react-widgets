import React, {Component} from 'react';
import PropTypes from 'prop-types';


class App extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.any,
        data: PropTypes.any,
        input: PropTypes.string.isRequired,
        validInput: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
        handleInputChange: PropTypes.func.isRequired,
        initPage: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.initPage();
    }

    render() {
        if (this.props.loading) {
            return <span>Loading...</span>;
        }
        else if (this.props.error !== null) {
            return <span>Error: {this.props.error.message}</span>;
        }
        else {
            const repos = this.props.data.items;
            const repoList = repos.map(function (repo, index) {
                return (
                    <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars)
                        <br/> {repo.description}</li>
                );
            });
            const invalidNote = this.props.validInput? null : <p>Input Invalid!</p>;
            return (
                <main>
                    <h1>Most Popular {this.props.category} Projects in Github</h1>
                    <div>
                        Wanna see other projects? <input type="text" onChange={this.props.handleInputChange} value={this.props.input}/>
                        {invalidNote}
                    </div>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
}

export default App;
