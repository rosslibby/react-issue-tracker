import React, { Component } from 'react';

class Excerpt extends Component {

    getExcerpt (text) {
        let modifiedText = text.substr(0, 140);

        if (!(/^[a-z0-9]+$/i.test(modifiedText.substr(139, 1)) && /^[a-z0-9]+$/i.test(text.substr(140, 1))) || text.length < 140) {
            if (text.length > 140) {
                return modifiedText + '...';
            }

            return modifiedText;
        }

        return modifiedText.substr(0, modifiedText.lastIndexOf(' ')) + '...';
    }

    render () {
        return (
            <p>
                { this.getExcerpt(this.props.text) }
            </p>
        );
    }
};

export default Excerpt;