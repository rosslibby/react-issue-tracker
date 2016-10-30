import React, { Component } from 'react';

class Pagination extends Component {
    pageButtons (num) {
        let numPages = parseInt(num / 25, 10);
        let pageArr = [];
        const currentPage = parseInt(this.props.current, 10);

        if (num % 25) {
            numPages++;
        }

        if (numPages > 10) {
            if (currentPage > 6) {
                for (let i = currentPage - 5; i < currentPage + 5; i++) {
                    pageArr.push(i);
                }
            } else {
                for (let i = 1; i < 11; i++) {
                    pageArr.push(i);
                }
            }
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