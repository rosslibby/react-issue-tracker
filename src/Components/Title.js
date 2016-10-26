import React, { Component, PropTypes } from 'react';

class Title extends Component {
    render () {
        return (
            <div className="list-issue-header">
                <span className="issue-id">
                    { this.props.id }
                </span>
                <span className="issue-title">{ this.props.text }</span>
            </div>
        );
    }
};

Title.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default Title;