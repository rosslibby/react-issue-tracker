import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render = () => {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.description }</p>
            </div>
        );
    }
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

Header.defaultProps = {
    description: 'Your description goes here',
    title: 'Your title here'
};

export default Header;