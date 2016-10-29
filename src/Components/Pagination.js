import React, { Component } from 'react';

class Pagination extends Component {
    pageButtons (num) {
        let numPages = parseInt(num / 25, 10);
        let pageArr = [];

        if (num % 25) {
            numPages++;
        }

        if (numPages > 10) {
            pageArr = [1, 2, 3, 4, 5, 6, 7, '...', numPages - 1, numPages];
        } else {
            for (let i = 0; i < numPages; i++) {
                pageArr.push(i + 1);
            }
        }

        return pageArr;
    }

    render () {
        return (
            <div className="pagination">
                <button onClick={() => { this.props.prev() }}>{'Prev page'}</button>
                { this.pageButtons(this.props.issues).map((page, index) => {
                    if (!isNaN(parseInt(page, 10))) {
                        return (
                            <button
                                key={ index }
                                onClick={() => { this.props.page(page, true) }}
                            >{ page }</button>
                        );
                    } else {
                        return (
                            <span key={ index }>{ page }</span>
                        );
                    }
                }) }
                <button onClick={() => { this.props.next() }}>{'Next page'}</button>
            </div>
        );
    }
};

export default Pagination;