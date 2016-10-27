import React, { Component, PropTypes } from 'react';

class User extends Component {
    render () {
        return (
            <div className="user">
                <img { ...this.props.avatar } alt={ this.props.alt } />
                <span>{ this.props.username }</span>
            </div>
        );
    }
};

User.propTypes = {
    avatar: PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number
    })
};

export default User;