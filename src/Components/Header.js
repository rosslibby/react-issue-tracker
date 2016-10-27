import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render () {
        return (
            <div>
                <h1>{ this.props.title }</h1>
            </div>
        );
    }
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: 'Your title here'
};

export default Header;