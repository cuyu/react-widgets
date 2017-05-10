import React, {Component} from 'react';
import PropTypes from 'prop-types';


class App extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.any,
        data: PropTypes.any,
        handlePromise: PropTypes.func.isRequired,
        promise: PropTypes.instanceOf(Promise).isRequired,
    };

    componentDidMount() {
        this.props.handlePromise();
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
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
}

export default App;
