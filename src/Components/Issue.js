import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import Comments from './Comments';
import Remarkable from 'remarkable';

class Issue extends Component {
    constructor (props) {
        super(props);

        this.state = { issue: [], comments: [] };
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
                    let res = JSON.parse(xhr.responseText);
                    this.setState({ issue: [res], comments: this.state.comments});
                    this.fetchComments(res.comments, res.comments_url);
                }
            }
        };
    }

    fetchComments (count, url) {
        if (count > 0) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.setRequestHeader('Accept', 'application/vnd.github.full+json');
            xhr.send(null);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        this.setState({ issue: this.state.issue, comments: JSON.parse(xhr.responseText)});
                    }
                }
            };
        }
    }

    linkUsers (summary) {
        const urlLeft = '(https://github.com/';
        const urlRight = ')';
        let split = summary.split('@');

        for (let i = 0; i < split.length; i++) {
            let item = split[i];
            if (i !== split.length - 1) {
                let nextItem = split[i + 1];
                let user = nextItem.split(' ')[0];
                split[i] = item.substr(0, item.length) + '[';
                split[i + 1] = '@' + nextItem.replace(/[\. ,:-]+/g, ']' + urlLeft + user + urlRight);
            }
        }

        return split.join(' ');
    }

    render () {
        let userProps;
        let title;
        let state;
        let summary;
        const commentProps = {
            comments: this.state.comments
        };

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

                    summary = this.linkUsers(item.body);

                    return null;
                })}

                <h1>{ title }</h1>
                <h1>{ state }</h1>
                <User { ...userProps } />
                <div dangerouslySetInnerHTML={{__html: md.render(summary)}} />
                <Comments { ...commentProps } />
            </div>
        );
    }
};

export default Issue;