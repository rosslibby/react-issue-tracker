import React, { Component, PropTypes } from 'react';

class Label extends Component {
    formatLabel (label) {
        if (label.indexOf('https://api.github.com/repos/') !== -1) {
            let newLabel = label.replace('https://api.', 'https://');
            newLabel = newLabel.replace('.com/repos/', '.com/');

            return newLabel;
        }

        return label;
    }

    render () {
        return (
            <a href={ this.formatLabel(this.props.url) } target="_blank">{ this.props.text }</a>
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