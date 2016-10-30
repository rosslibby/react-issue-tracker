import React, { Component, PropTypes } from 'react';

class User extends Component {
    render () {
        const userUrl = 'https://github.com/' + this.props.username;

        return (
            <div className={ this.props.className }>
                <img { ...this.props.avatar } alt={ this.props.alt } className="user user__image" />
                <a href={ userUrl } target="_blank" className="user user__username">{ this.props.username }</a>
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

User.defaultProps = {
    className: 'user'
};

export default User;