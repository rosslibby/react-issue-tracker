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
                <button
                    className="pagination__btn pagination__btn--prev"
                    onClick={() => { this.props.prev() }}
                >{ String.fromCharCode('0x2039') }</button>
                { this.pageButtons(this.props.issues).map((page, index) => {
                    let className = parseInt(window.history.currentPage, 10) === page
                    ? 'pagination__btn pagination__btn--active'
                    : 'pagination__btn';

                    return (
                        <button
                            className={ className }
                            key={ index }
                            onClick={() => { this.props.page(page, true) }}
                        >{ page }</button>
                    );
                }) }
                <button
                    className="pagination__btn pagination__btn--next"
                    onClick={() => { this.props.next() }}
                >{ String.fromCharCode('0x203A') }</button>
            </div>
        );
    }
};

export default Pagination;