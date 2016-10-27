import React, { Component } from 'react';

class Pagination extends Component {
    render () {
        return (
            <div>
                <button onClick={() => { this.props.prev() }}>{'Prev page'}</button>
                
                <button onClick={() => { this.props.next() }}>{'Next page'}</button>
            </div>
        );
    }
};

export default Pagination;