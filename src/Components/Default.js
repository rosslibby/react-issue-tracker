import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Pagination from './Pagination';
import { browserHistory } from 'react-router';

class Default extends Component {
    constructor (props) {
        super(props);
        this.state = { items: [], page: 0, issues: 0 };
    }

    componentDidMount () {
        this.fetchPage();
        this.countPages();
    }

    fetchPage (numPages, specific) {
        specific = specific || false;

        if (specific) {
            numPages = numPages || 1;
        } else {
            numPages = this.state.page + numPages || window.history.currentPage || this.props.location.pathname.split('/page/')[1] || 1;
        }

        window.history.currentPage = numPages;

        browserHistory.push('/page/' + numPages);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues?per_page=25&page=' + numPages, true);
        xhr.setRequestHeader('Accept', 'application/vnd.github.text+json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ items: JSON.parse(xhr.responseText), page: numPages, issues: this.state.issues });
                    return this.state;
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

                    this.setState({ items: this.state.items, page: this.state.page, issues: openIssues })
                }
            }
        };
    }

    render () {
        const listProps = {
            items: this.state.items
        };

        const pageProps = {
            next: () => { this.fetchPage(1) },
            prev: () => { this.fetchPage(-1) },
            page: (num) => { this.fetchPage(num, true) },
            issues: this.state.issues,
            current: this.props.params.number
        };

        return (
            <div className="main-wrapper">
                <Header />
                <div className="main">
                    <List { ...listProps } />
                    <Pagination { ...pageProps } />
                </div>
            </div>
        );
    }
};

export default Default;