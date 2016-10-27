import React, { Component, PropTypes } from 'react';

class Label extends Component {
    render () {
        return (
            <a href={ this.props.url } target="_blank">{ this.props.text }</a>
        );
    }
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

Label.defaultProps = {
    text: 'link text',
    url: '#'
};

export default Label;