import React, { Component } from 'react';

class CardData extends Component {
    render () {

        if (this.props.link) {
            return (
                <span className="card-data">
                    <a
                        href={ this.props.url }
                        className="card-data__link"
                        target={ this.props.target }
                    >{ this.props.text }</a>
                </span>
            );
        } else {
            return (
                <span className="card-data">
                    { this.props.text }
                </span>
            );
        }
    }
};

export default CardData;