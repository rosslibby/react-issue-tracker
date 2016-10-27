import React, { Component, PropTypes } from 'react';

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
                <span className="issue-title">{ this.props.text }</span>
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