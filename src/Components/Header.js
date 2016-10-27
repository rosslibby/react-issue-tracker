import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render () {
        return (
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/lol'}>lol</Link></li>
            </ul>
        );
    }
};

export default Header;