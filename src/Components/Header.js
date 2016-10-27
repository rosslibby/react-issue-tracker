import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render () {
        return (
            <ul>
                <li><Link to={'/'}>Home</Link></li>
            </ul>
        );
    }
};

export default Header;