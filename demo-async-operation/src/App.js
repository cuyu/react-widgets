import React, {Component} from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: null,
            data: null,
        }
    }

    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, data: value.data}),
            error => this.setState({loading: false, error: error}));
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            const repos = this.state.data.items;
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
