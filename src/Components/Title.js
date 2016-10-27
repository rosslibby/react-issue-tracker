import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Title extends Component {
    render () {
        return (
            <div className="list-issue-header">
                <span
                    className="issue-id"
                    onClick={ this.props.click }
                >
                    { this.props.id }
                </span>
                <Link to={'/issue/' + this.props.id }>{ this.props.text }</Link>
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