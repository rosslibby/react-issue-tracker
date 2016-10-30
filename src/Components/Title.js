import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Title extends Component {
    render () {
        return (
            <div className="card__header">
                <span
                    className="badge"
                    onClick={ this.props.click }
                >
                    { this.props.id }
                </span>
                <h2 className="card__header__title">
                    <Link
                        to={'/issue/' + this.props.id }
                        className="card__header__title__link"
                    >{ this.props.text }</Link>
                </h2>
            </div>
        );
    }
};

Title.propTypes = {
    click: PropTypes.func,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default Title;