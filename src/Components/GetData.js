import React, { Component } from 'react';
import Label from './Label';
import Title from './Title';

class GetData extends Component {
    constructor (props) {
        super(props);
        this.state = { items: [], page: 0 };
    }

    componentDidMount () {
        this.fetchPage();
        this.countPages();
    }

    fetchPage (numPages) {
        numPages = this.state.page + numPages || 1;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues?per_page=25&page=' + numPages, true);
        xhr.setRequestHeader('Accept', 'application/vnd.github.text+json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ items: JSON.parse(xhr.responseText), page: numPages });
                }
            }
        };
    }

    fetchIssue (issue) {
        issue = issue || 1;
        console.log(issue);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues/' + issue, true);
        xhr.setRequestHeader('Accept', 'application/vnd.github.text+json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(JSON.parse(xhr.responseText));
                }
            }
        };
    }

    countPages () {
        let xhr = new XMLHttpRequest();
        let openIssues;

        xhr.open('GET', 'https://api.github.com/repos/rails/rails', true);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    openIssues = JSON.parse(xhr.responseText).open_issues_count;

                    for (let i = (openIssues / 25); i > 0; i--) {
                    }
                }
            }
        };
    }

    formatLabel (label) {
        if (label.indexOf('https://api.github.com/repos/') !== -1) {
            let newLabel = label.replace('https://api.', 'https://');
            newLabel = newLabel.replace('.com/repos/', '.com/');

            return newLabel;
        }

        return label;
    }

    render () {
        return (
            <div>
                <button onClick={() => {this.fetchPage(-1)}}>{'Prev page'}</button>
                <button onClick={() => {this.fetchPage(1)}}>{'Next page'}</button>
                <hr />
                <ol>
                    {this.state.items.map((item) => {

                        const titleProps = {
                            click: () => {
                                this.fetchIssue(item.number);
                            },
                            id: item.number,
                            text: item.title
                        };

                        return (
                            <li key={ item.id }>
                                <Title { ...titleProps } />
                                <a href={ item.html_url } target="_blank">{'[external link]'}</a>
                                <p>{ item.body_text.substr(0, 140) }</p>
                                <small><em>{ item.user.login }</em></small>
                                <img src={ item.user.avatar_url + '&s=88' } alt={ item.user.login } />
                                { item.labels.map((label, index) => {

                                    const labelProps = {
                                        key: index,
                                        text: label.name,
                                        url: this.formatLabel(label.url)
                                    };

                                    return (
                                        <Label
                                            { ...labelProps }
                                        />
                                    );
                                }) }
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
};

export default GetData;