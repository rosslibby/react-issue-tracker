import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import Remarkable from 'remarkable';

class Issue extends Component {
    constructor (props) {
        super(props);

        this.state = { issue: [] };
    }

    componentDidMount () {
        this.fetchIssue();
    }

    fetchIssue () {
        let issue = this.props.params.number;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues/' + issue, true);
        xhr.setRequestHeader('Accept', 'application/vnd.github.full+json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ issue: [JSON.parse(xhr.responseText)]});
                }
            }
        };
    }

    render () {
        let userProps;
        let title;
        let state;
        let summary;

        const md = new Remarkable();

        return (
            <div>
                <Header />
                {this.state.issue.map((item) => {
                    userProps = {
                        avatar: {
                            src: item.user.avatar_url + '&s=88',
                            width: 44,
                            height: 44
                        },
                        alt: item.user.login,
                        username: item.user.login
                    };

                    title = item.title;
                    state = item.state;

                    summary = item.body;

                    return null;
                })}

                <h1>{ title }</h1>
                <h1>{ state }</h1>
                <User { ...userProps } />
                <div dangerouslySetInnerHTML={{__html: md.render(summary)}} />
            </div>
        );
    }
};

export default Issue;