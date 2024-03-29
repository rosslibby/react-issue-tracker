import React, { Component } from 'react';
import Header from './Header';
import Labels from './Labels';
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
        const urlLeft = '<a href="https://github.com/';
        const urlRight = '</a>';
        let split = summary.split('@');

        for (let i = 0; i < split.length; i++) {
            let item = split[i];
            if (i !== split.length - 1 && item.substr(item.length - 1, 1) !== '\'' && item.substr(item.length - 1, 1) !== '`') {
                let nextItem = split[i + 1];
                let user = nextItem.split(' ')[0];
                split[i] = item.substr(0, item.length) + urlLeft + user + '" target="_blank">';
                split[i + 1] = '@' + nextItem.replace(' ', '' + user + urlRight);
            } else if (item.substr(item.length - 1, 1) === '`' || item.substr(item.length - 1, 1) === '\'') {
                split[i + 1] = '@' + split[i + 1];
            }
        }

        return split.join(' ');
    }

    render () {
        let userProps;
        let title;
        let state;
        let summary;
        let labels = [];
        const commentProps = {
            comments: this.state.comments
        };

        this.state.issue.map((item) => {
            userProps = {
                avatar: {
                    src: item.user.avatar_url + '&s=88',
                    width: 44,
                    height: 44
                },
                alt: item.user.login,
                username: item.user.login,
                className: 'user page__user'
            };

            title = item.title;
            state = item.state;
            labels = item.labels;

            summary = this.linkUsers(item.body);

            return null;
        });

        const md = new Remarkable({
            html: true
        });

        return (
            <div>
                <Header />
                <div className="main">
                    <div className="controls-wrapper">
                        <button
                            className="btn btn--primary"
                            onClick={() => {window.history.back();}}
                        >Go back</button>
                    </div>
                    <div className="page">
                        <h1 className="page__title">{ title } <span className="badge">{ state }</span></h1>
                        <User { ...userProps } />
                        <div
                            className="page__content"
                            dangerouslySetInnerHTML={{__html: md.render(summary)}}
                        />
                        <div className="page__footer">
                            <Labels labels={ labels } className="labels page__footer__labels" />
                        </div>
                    </div>

                    <Comments { ...commentProps } />
                </div>
            </div>
        );
    }
};

export default Issue;