import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Pagination from './Pagination';

class Default extends Component {
    constructor (props) {
        super(props);
        this.state = { items: [], page: 0 };
    }

    componentDidMount () {
        // this.fetchPage();
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
                    return this.state;
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
            prev: () => { this.fetchPage(-1) }
        };

        return (
            <div>
                <Header />
                <Pagination { ...pageProps } />
                <List { ...listProps } />
            </div>
        );
    }
};

export default Default;